<template lang="pug">
  .login
    .hero
      .inner.mxa.flex
        .copy.flex
          .copy-wrap
            h1.tagline Discover the things that matter to you.
            p.usp Find out about books, podcasts and other hot topics in your timeline.
            .buttons
              .sign-in
                el-button(:loading="tokenRequestLoading", type="primary", @click="handleSignIn") Sign in with Twitter
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { twitterOAuthURL } from './../helpers'
export default {
  computed: {
    ...mapState(['oAuthToken', 'oAuthTokenSecret', 'tokenRequestLoading'])
  },
  methods: {
    ...mapActions(['requestToken']),
    async handleSignIn () {
      await this.requestToken().catch(error => this.$message.error('Error fetching token'))
      this.oAuthToken && (window.location.href = twitterOAuthURL(this.oAuthToken))
    }
  }
}
</script>

<style lang="sass" scoped>
.hero
  background: #7994E5
  width: 100vw
  height: 100vh
  padding: 50px
  color: white
  border: 22px solid #313036
  line-height: 1.1
  overflow: hidden
  @media(max-width: 1200px)
    border-width: 8px
    font-size: 19px
    display: flex
    flex-direction: column
    align-items: center
    overflow: auto


@keyframes xfade
  17%
    opacity: 1

  25%
    opacity: 0

  92%
    opacity: 0

.inner
  max-width: 1120px
  margin: auto
  align-items: center
  justify-content: center
  @media(max-width: 1200px)
    display: block

h1
  font-size: 2.7em
  font-family: "Rubik"
  font-weight: 500
  width: 100%;
  margin-bottom: 1rem

.usp
  font-size: 1.2em
  color: #313036
  font-family: "Rubik"
  font-weight: 100
  line-height: 1.3
  width: 100%;
  margin-bottom: 2em

.copy-wrap

.copy
  width: 50%
  padding-right: 5vw
  position: relative
  @media(max-width: 1200px)
    width: 100%
    padding-right: 0
.buttons
  display: flex
  @media(max-width: 1200px)
    flex-direction: column
    align-items: center
.sign-in
  margin-right: 10px
  @media(max-width: 1200px)
    margin: 0 0 20px 0
.sign-in button
  text-transform: uppercase
  background: transparent
  border: 1px solid white
  padding: 1rem
  letter-spacing: 2px
  font-family: "Rubik"
  font-weight: 500
  @media(max-width: 1200px)
    width: 100%
    font-size: 16px
    padding-top: 2rem
    padding-bottom: 2rem
</style>

