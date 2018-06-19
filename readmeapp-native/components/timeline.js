import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { AuthSession } from "expo";
import styled from "styled-components";

import { fetchTweets, logout } from "./../lib/reducer";

import Tweet from "./../components/tweet";
import UserBar from "./../components/user-bar";
import Centered from "./../components/centered";
import Loader from "./../components/loader";

class Timeline extends Component {
  componentWillMount() {
    const {
      user,
      oAuthAccessToken,
      oAuthAccessTokenSecret,
      fetchTweets,
      tweets
    } = this.props;
    if (!tweets.length)
      fetchTweets(oAuthAccessToken, oAuthAccessTokenSecret, user.id).catch(
        error => console.log(error)
      );
  }
  render() {
    const { tweets, user, logout, tweetsLoading } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <UserBar user={user} logout={logout} />
        <Centered>
          {tweetsLoading ? (
            <Loader />
          ) : (
            <FlatList
              data={tweets}
              renderItem={tweet => {
                return <Tweet tweet={tweet} />;
              }}
              style={{
                marginVertical: 20
              }}
              keyExtractor={tweet => tweet.id_str}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#eaeaea",
                    marginVertical: 20
                  }}
                />
              )}
            />
          )}
        </Centered>
      </View>
    );
  }
}

const mapStateToProps = ({
  user,
  oAuthAccessToken,
  oAuthAccessTokenSecret,
  tweets,
  tweetsLoading
}) => {
  return {
    user,
    oAuthAccessToken,
    oAuthAccessTokenSecret,
    tweets,
    tweetsLoading
  };
};

const mapDispatchToProps = {
  fetchTweets,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
