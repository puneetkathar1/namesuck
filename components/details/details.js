import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { GrHomeRounded } from 'react-icons/gr'
const Details = () => {
  const router = useRouter()
  const { details } = router.query;

  const [NFTdata, setNFTdata] = useState(undefined)

  useEffect(() => {
    FetchNFT()
  })

  const FetchNFT = async () => {
    const options = {
      method: 'GET',
      url: `https://testnets-api.opensea.io/api/v1/asset/0x1B90C17A8791bDCef23EBEf7D7005b0583E054A8/${details}`,
    }

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setNFTdata(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <div>
      <div className="jsx-7b97eb7cbe0cc6df">
        <section id="devices" className="jsx-7b97eb7cbe0cc6df">
          <div
            style={{
              float: 'left',
              margin: '1rem',
              zIndex: '20',
              position: 'absolute',
              padding: '1.5rem 4.5rem',
              cursor: 'pointer',
            }}
            className="jsx-7b97eb7cbe0cc6df"
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'inline-block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                backgroundColor:'#ffffff',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
                maxWidth: '100%',
              }}
            >
              <GrHomeRounded size={50} />
            </span>
          </div>
          <div
            style={{ minWidth: '427px', zIndex: '2' }}
            className="jsx-7b97eb7cbe0cc6df deviceWrap iphone-xr-portrait"
          >
            <div
              style={{
                width: '270px',
                height: '41rem',
                paddingTop: '135px',
                paddingBottom: '110px',
              }}
              className="jsx-7b97eb7cbe0cc6df device"
            >
              <div
                style={{ height: '83px' }}
                className="jsx-7b97eb7cbe0cc6df flashingBottom"
              ></div>
              {NFTdata ? (
                <div className="container nft-details">
                  <div className="nft-image">
                    <img
                      src={NFTdata.image_url}
                      alt=""
                      width={282}
                      height={410}
                    />
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Details
