import React, { useState, useCallback } from 'react'
import { User } from './User'
import PinterestLogo from '../assets/pinterest.svg?react'
import TiktokLogo from '../assets/tiktok.svg?react'
import {
    LoginSocialGoogle,
    LoginSocialAmazon,
    LoginSocialFacebook,
    LoginSocialGithub,
    LoginSocialInstagram,
    LoginSocialLinkedin,
    LoginSocialMicrosoft,
    LoginSocialPinterest,
    LoginSocialTwitter,
    LoginSocialApple,
    LoginSocialTiktok,
} from 'reactjs-social-login'

import {
    FacebookLoginButton,
    GoogleLoginButton,
    GithubLoginButton,
    AmazonLoginButton,
    InstagramLoginButton,
    LinkedInLoginButton,
    MicrosoftLoginButton,
    TwitterLoginButton,
    AppleLoginButton,
} from 'react-social-login-buttons'

const Login = () => {
    const REDIRECT_URI = window.location.href;
    const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState(null)
  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])

  return (
    <>
      {provider && profile ? (
        <User provider={provider} profile={profile} onLogout={onLogoutSuccess} />
      ) : (
        <div className={`App ${provider && profile ? 'hide' : ''}`}>
          <h1 className='title'>ReactJS Social Login</h1>
          <LoginSocialFacebook
            isOnlyGetToken
            appId={'1397673097540373'}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>

          <LoginSocialGoogle
            isOnlyGetToken
            client_id={'992859461740-2ivk2d55bg3v7kckb1nm1rkd1fb6dpgb.apps.googleusercontent.com'}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              console.log(provider)
              console.log(data)
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
            redirect_uri={REDIRECT_URI}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>

          <LoginSocialApple
            client_id={''}
            scope={'name email'}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={err => {
              console.log(err);
            }}
          >
            <AppleLoginButton />
          </LoginSocialApple>

          <LoginSocialAmazon
            isOnlyGetToken
            client_id={'amzn1.application-oa2-client.6e9ad5a36dc64c10aa89c8a645d45fae'}
            redirect_uri={REDIRECT_URI}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
            onLoginStart={onLoginStart}
          >
            <AmazonLoginButton />
          </LoginSocialAmazon>

          <LoginSocialInstagram
            isOnlyGetToken
            client_id={''}
            client_secret={''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <InstagramLoginButton />
          </LoginSocialInstagram>

          <LoginSocialMicrosoft
            isOnlyGetToken
            client_id={''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <MicrosoftLoginButton />
          </LoginSocialMicrosoft>

          <LoginSocialLinkedin
            isOnlyGetToken
            client_id='77au4adqzx6wln'
            // client_secret='VkHAmIlFOmfQGb0O'
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            scope='profile'
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <LinkedInLoginButton />
          </LoginSocialLinkedin>

          <LoginSocialGithub
            isOnlyGetToken
            client_id={'bb2532682aa45d456b50'}
            client_secret={'5bc99b89575267a3477a5e4cd85b6cff84f0a70d'}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GithubLoginButton />
          </LoginSocialGithub>

          <LoginSocialPinterest
            isOnlyGetToken
            client_id={''}
            client_secret={''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
            className='pinterest-btn'
          >
            <div className='content'>
              <div className='icon'>
              <PinterestLogo />
              </div>
              <span className='txt'>Login With Pinterest</span>
            </div>
          </LoginSocialPinterest>

          <LoginSocialTwitter
            isOnlyGetToken
            client_id={''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <TwitterLoginButton />
          </LoginSocialTwitter>

          <LoginSocialTiktok
            client_key={''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
            className="pinterest-btn"
          >
            <div className="content">
              <div className="icon">
                <TiktokLogo />
              </div>
              <span className="txt">Login With Tiktok</span>
            </div>
          </LoginSocialTiktok>
        </div>
      )}
    </>
  )
}

export default Login