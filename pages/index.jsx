import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import Image from 'next/image'
import logoImage from '../public/images/logo-icon.png'
import logoImageSm from '../public/images/logo-dark.png'

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* navbar */}
    <div className="b-light">
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="input-group d-none d-lg-flex flex-nowrap mx-4 ">
            <select
              className="form-select flex-shrink-0"
              css={css`
                width: 10.5rem !important;
              `}
            >
              <option>All categories</option>
              <option>Computers</option>
              <option>Smartphones</option>
              <option>TV, Video, Audio</option>
              <option>Cameras</option>
              <option>Headphones</option>
              <option>Wearables</option>
              <option>Printers</option>
              <option>Video Games</option>
              <option>Home Music</option>
              <option>Data Storage</option>
            </select>
            <input
              className="form-control rounded-start w-100 ps-5"
              type="text"
              placeholder="Search for products"
            />
            <BsSearch className=" position-absolute top-50 start-0 translate-middle-y ms-3" />
          </div>
          {/* search */}
          <div className="navbar-brand  d-none d-sm-block ms-2 flex-shrink-0">
            <Link href="/">
              <Image
                src={logoImageSm}
                alt="Bootstrap"
                width="142"
                height="34"
              />
            </Link>
          </div>
          <div className="navbar-brand d-sm-none ms-2">
            <Link href="/">
              <Image src={logoImage} alt="Bootstrap" width="74" height="34" />
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar navbar-expand-lg navbar-light mt-2">nav2</div>
    </div>
  </>
)

export default Home