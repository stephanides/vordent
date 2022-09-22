import React, { ForwardedRef, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../design';

type LogoSVGProps = {
  children?: ReactNode;
  className?: string;
};

const LogoSvg = React.forwardRef(
  (props: LogoSVGProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="144"
        height="161"
        viewBox="0 0 144 161"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_1336"
              data-name="Rectangle 1336"
              width="101.247"
              height="61.977"
              fill="#fff"
            />
          </clipPath>
        </defs>
        <g
          id="Group_3330"
          data-name="Group 3330"
          transform="translate(-140 35)"
        >
          <g
            id="Path_11580"
            data-name="Path 11580"
            transform="translate(140 -35)"
            fill="#005fa6"
          >
            <path
              d="M 127 160 L 17 160 C 12.72624969482422 160 8.708292007446289 158.3357086181641 5.686291694641113 155.3137054443359 C 2.664291620254517 152.2917022705078 1 148.2737426757812 1 144 L 1 17 C 1 12.72624969482422 2.664291620254517 8.708292007446289 5.686291694641113 5.686291694641113 C 8.708292007446289 2.664291620254517 12.72624969482422 1 17 1 L 127 1 C 131.2737426757812 1 135.2917022705078 2.664291620254517 138.3137054443359 5.686291694641113 C 141.3357086181641 8.708292007446289 143 12.72624969482422 143 17 L 143 144 C 143 148.2737426757812 141.3357086181641 152.2917022705078 138.3137054443359 155.3137054443359 C 135.2917022705078 158.3357086181641 131.2737426757812 160 127 160 Z"
              stroke="none"
            />
            <path
              d="M 17 2 C 12.99334716796875 2 9.226516723632812 3.560256958007812 6.393386840820312 6.393386840820312 C 3.560256958007812 9.226516723632812 2 12.99334716796875 2 17 L 2 144 C 2 148.0066528320312 3.560256958007812 151.7734832763672 6.393386840820312 154.6066131591797 C 9.226516723632812 157.4397430419922 12.99334716796875 159 17 159 L 127 159 C 131.0066528320312 159 134.7734832763672 157.4397430419922 137.6066131591797 154.6066131591797 C 140.4397430419922 151.7734832763672 142 148.0066528320312 142 144 L 142 17 C 142 12.99334716796875 140.4397430419922 9.226516723632812 137.6066131591797 6.393386840820312 C 134.7734832763672 3.560256958007812 131.0066528320312 2 127 2 L 17 2 M 17 0 L 127 0 C 136.3888549804688 0 144 7.61114501953125 144 17 L 144 144 C 144 153.3888549804688 136.3888549804688 161 127 161 L 17 161 C 7.61114501953125 161 0 153.3888549804688 0 144 L 0 17 C 0 7.61114501953125 7.61114501953125 0 17 0 Z"
              stroke="none"
              fill="#fff"
            />
          </g>
          <g
            id="Group_3265"
            data-name="Group 3265"
            transform="translate(161.377 29.511)"
          >
            <g
              id="Group_3262"
              data-name="Group 3262"
              transform="translate(0 0)"
              clip-path="url(#clip-path)"
            >
              <path
                id="Rectangle_1334"
                data-name="Rectangle 1334"
                d="M1.556,0h.122A1.557,1.557,0,0,1,3.235,1.557v.02A1.556,1.556,0,0,1,1.679,3.133H1.556A1.556,1.556,0,0,1,0,1.577V1.556A1.556,1.556,0,0,1,1.556,0Z"
                transform="translate(41.511 48.697)"
                fill="#fff"
              />
              <path
                id="Path_3102"
                data-name="Path 3102"
                d="M31.977,75.574V70.621a2.1,2.1,0,0,1,.606-1.61,2.32,2.32,0,0,1,1.513-.624l9.3-.024c.033-.187,0-.055,0,.673v1.887l-8.14-.085L35.22,75.4h8.163v2.484H35.038a3.675,3.675,0,0,1-2.155-.632,1.955,1.955,0,0,1-.906-1.678"
                transform="translate(-7.45 -15.909)"
                fill="#fff"
              />
              <path
                id="Path_3103"
                data-name="Path 3103"
                d="M51.832,62.02l-.112,8.553V76.41H48.475V64.787a3.158,3.158,0,0,1,.637-2.144,2.008,2.008,0,0,1,1.509-.625h1.211Z"
                transform="translate(-11.294 -14.449)"
                fill="#fff"
              />
              <path
                id="Path_3104"
                data-name="Path 3104"
                d="M57.342,71.043v6.873H54.1V68.42h3.245Z"
                transform="translate(-12.603 -15.94)"
                fill="#fff"
              />
              <path
                id="Path_3105"
                data-name="Path 3105"
                d="M59.652,77.918v-9.5H69.928a2.171,2.171,0,0,1,1.549.684,2.247,2.247,0,0,1,.547,1.549v7.263H68.811V71.045H62.9v6.873Z"
                transform="translate(-13.898 -15.94)"
                fill="#fff"
              />
              <path
                id="Path_3106"
                data-name="Path 3106"
                d="M80.7,71.045v6.873H77.454v-9.5H80.7Z"
                transform="translate(-18.045 -15.94)"
                fill="#fff"
              />
              <path
                id="Path_3107"
                data-name="Path 3107"
                d="M83.468,75.577V70.624a2.1,2.1,0,0,1,.606-1.61,2.32,2.32,0,0,1,1.513-.624l9.3-.024c.033-.187,0-.055,0,.673v1.887l-8.14-.085L86.711,75.4h8.163v2.484H86.529a3.675,3.675,0,0,1-2.155-.632,1.955,1.955,0,0,1-.906-1.678"
                transform="translate(-19.446 -15.91)"
                fill="#fff"
              />
              <path
                id="Rectangle_1335"
                data-name="Rectangle 1335"
                d="M1.556,0h.122A1.557,1.557,0,0,1,3.235,1.557v.02A1.556,1.556,0,0,1,1.679,3.133H1.556A1.556,1.556,0,0,1,0,1.577V1.556A1.556,1.556,0,0,1,1.556,0Z"
                transform="translate(59.414 48.697)"
                fill="#fff"
              />
              <path
                id="Path_3108"
                data-name="Path 3108"
                d="M47.655,14.069c.79-.114,1.589-.138,2.385-.182a32.55,32.55,0,0,1,4.149.079,37.4,37.4,0,0,1,4.246.577c1.494.278,2.953.7,4.413,1.114,1.235.356,2.445.788,3.64,1.253,2.036.794,4.028,1.691,6.006,2.626,1.878.891,3.708,1.869,5.516,2.9q2.39,1.362,4.7,2.846c1.7,1.085,3.366,2.219,4.986,3.419.276.206.579.377.868.571.125.084.31.121.229.356-.09.258-.248.09-.371.072a29.715,29.715,0,0,1-3.37-.617c-.836-.206-1.672-.413-2.5-.651q-1.928-.553-3.829-1.185c-.8-.268-1.586-.584-2.376-.884-.65-.246-1.3-.483-1.94-.749-1.062-.441-2.137-.844-3.186-1.316-.706-.318-1.441-.575-2.15-.889-.867-.381-1.749-.724-2.618-1.1-1.384-.6-2.776-1.185-4.191-1.714-.779-.292-1.545-.627-2.333-.891-.841-.283-1.661-.623-2.514-.855-.922-.25-1.835-.529-2.754-.784-.809-.222-1.637-.366-2.448-.564-.643-.156-1.289-.3-1.937-.4a11.513,11.513,0,0,0-1.587-.206c-.327,0-.654-.123-.983-.134a13.632,13.632,0,0,0-1.5-.107c-.022,0-.044-.007-.068-.011a3.922,3.922,0,0,0-1.259-.042.168.168,0,0,0-.153-.053c-.816-.006-1.635-.035-2.451-.011-.64.02-1.281.051-1.924.106s-1.319.052-1.973.131c-.581.071-1.161.171-1.74.265-.074.013-.16.1-.191-.031-.026-.105.084-.136.154-.156,1.042-.3,2.034-.752,3.07-1.079a45.128,45.128,0,0,1,4.638-1.22c.588-.118,1.18-.2,1.769-.307.074-.014.15-.025.222-.038.456-.044.907-.094,1.356-.143"
                transform="translate(-8.49 -3.227)"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                id="Path_3109"
                data-name="Path 3109"
                d="M48.619,12c-.795.12-1.589.226-2.381.369-.617.11-1.216.3-1.848.364a30.3,30.3,0,0,1,5.085-2.216c.041-.015.083-.028.127-.044a8.559,8.559,0,0,0,1.426-.419A.5.5,0,0,0,51.285,10c.8-.191,1.606-.344,2.415-.474a16.466,16.466,0,0,1,2.477-.29c.711,0,1.422-.079,2.133-.052a35.1,35.1,0,0,1,3.62.281,40.379,40.379,0,0,1,4.981,1.02c1.126.308,2.229.7,3.337,1.062,1.275.419,2.534.882,3.772,1.4.994.415,1.988.838,2.965,1.295q1.658.773,3.289,1.615,1.939,1,3.816,2.122a6.773,6.773,0,0,0,.669.351c.132.06.18.154.132.264-.04.09-.152.107-.263.1-.391-.042-.782-.062-1.172-.106-.548-.059-1.1-.12-1.641-.2-.592-.087-1.183-.193-1.773-.3-.647-.118-1.292-.242-1.936-.38-1.538-.334-3.054-.752-4.561-1.2-1.119-.336-2.234-.685-3.349-1.032-2.348-.733-4.678-1.523-7.059-2.155a50.752,50.752,0,0,0-5.421-1.17,30.519,30.519,0,0,0-6.932-.327c-.244.02-.488.037-.733.054a5.341,5.341,0,0,0-1.282.134c-.05,0-.1,0-.151,0"
                transform="translate(-10.342 -2.139)"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                id="Path_3110"
                data-name="Path 3110"
                d="M36.837,17.816l.226-.134c.052-.017.176.237.176.237a.639.639,0,0,0-.262.251,5.639,5.639,0,0,0-.812,1.637,20.523,20.523,0,0,0-.726,3.5c-.13,1.047-.209,2.1-.312,3.145a1.141,1.141,0,0,1-.473.875.455.455,0,0,1-.74-.105,29.7,29.7,0,0,1-1.968-3.175,19.165,19.165,0,0,1-1.259-2.979,6.685,6.685,0,0,1-.41-2.085,10.406,10.406,0,0,1,.187-1.83c.245-1.312.268-2.644.427-3.965a9.621,9.621,0,0,0-.765-4.459,12.273,12.273,0,0,1-.691-2.567,5.273,5.273,0,0,1,.711-3.287,2.374,2.374,0,0,1,2.067-1.351A2.247,2.247,0,0,0,34.061.6,1.156,1.156,0,0,1,35.328.035a8.981,8.981,0,0,1,2.323.92c1.218.7,2.409,1.453,3.6,2.194.191.118.449.13.625.375a2.732,2.732,0,0,1-1.338-.255,18.772,18.772,0,0,1-2.572-1.354,3.648,3.648,0,0,0-.989-.388,2.391,2.391,0,0,0-2,.432,5.07,5.07,0,0,1-1.795.744A1.351,1.351,0,0,0,32.06,3.5a3.586,3.586,0,0,0-.182.989,13.777,13.777,0,0,0,.186,2.445,20.958,20.958,0,0,0,.515,2.573c.16.613.316,1.227.527,1.822a7.33,7.33,0,0,1,.459,2.267,8.14,8.14,0,0,1-.374,2.35c-.324,1.189-.8,2.328-1.026,3.552a4.931,4.931,0,0,0,.3,2.789,8.1,8.1,0,0,0,1.907,2.679c.059.06.114.132.206.1s.084-.131.081-.21a15.033,15.033,0,0,1,.167-3.061,9.781,9.781,0,0,1,.623-2.17,4.606,4.606,0,0,1,1.389-1.8"
                transform="translate(-6.848 0)"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                id="Path_3111"
                data-name="Path 3111"
                d="M45.572,17.43a3.922,3.922,0,0,1,1.259.041c-.028.055-.054.11-.086.163a7.921,7.921,0,0,0-1.1,3.383c-.091,1.256-.18,2.513-.172,3.775a6.8,6.8,0,0,1-.987,3.4,14.824,14.824,0,0,1-1.67,2.3l-.008.008c-.371.369-.744.738-1.113,1.106a3.053,3.053,0,0,1-.673.5,2.493,2.493,0,0,1-.311-1.786c.059-.435.123-.869.206-1.3.129-.66.248-1.323.41-1.975a16.684,16.684,0,0,0,.4-2.537,6.642,6.642,0,0,0-.288-2.571A2.482,2.482,0,0,0,39.7,20.138c-.105-.031-.241-.024-.3-.182a1.608,1.608,0,0,1,1.378.281,5.924,5.924,0,0,1,.757.818,7.332,7.332,0,0,1,.831,2.886A15.321,15.321,0,0,1,42.4,26.73a4.1,4.1,0,0,1-.245,1.1c-.3.812-.614,1.617-.91,2.429a6.069,6.069,0,0,0-.2.737.218.218,0,0,0,.086.245.177.177,0,0,0,.228-.02c.18-.177.423-.283.558-.511.021-.02.041-.041.064-.061a1.83,1.83,0,0,0,.48-.492,8.855,8.855,0,0,0,1.31-2.326,15.211,15.211,0,0,0,.724-2.965c0-.04-.044-2.969.018-3.893a7.982,7.982,0,0,1,.426-2c.178-.535.439-1.029.632-1.553"
                transform="translate(-9.181 -4.052)"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                id="Path_3112"
                data-name="Path 3112"
                d="M49.914,12.821a5.372,5.372,0,0,1,1.282-.134c-.158.382-.422.713-.547,1.111l-1.347.147c.206-.375.41-.751.612-1.124"
                transform="translate(-11.486 -2.956)"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                id="Path_3113"
                data-name="Path 3113"
                d="M49.964,8.95a16.87,16.87,0,0,0,1.055-2.508,4.639,4.639,0,0,0,.263-1.472,1.357,1.357,0,0,0-.228-.746,1.424,1.424,0,0,0-.8-.538,10.285,10.285,0,0,0-2.225-.544,11.036,11.036,0,0,0-2.067-.173c0-.029,0-.06,0-.088.29-.052.578-.116.867-.153a11.473,11.473,0,0,1,2.85-.026,2.916,2.916,0,0,1,1.931.9,1.974,1.974,0,0,1,.419,1.382,7.336,7.336,0,0,1-.571,3.32,1.4,1.4,0,0,0-.065.235,8.4,8.4,0,0,1-1.424.417"
                transform="translate(-10.707 -0.611)"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                id="Path_3114"
                data-name="Path 3114"
                d="M9.378,53.17H0V41.1H4.127v8.751h3.9L11.689,41.1h4.15l-3.788,9.324q-.395.925-.847,1.839a1.832,1.832,0,0,1-1.826.913"
                transform="translate(0 -9.574)"
                fill="#fff"
              />
              <path
                id="Path_3115"
                data-name="Path 3115"
                d="M20.7,44.2a2.693,2.693,0,0,1,1.113-2.262A4.477,4.477,0,0,1,24.6,41.1h9.17a2.639,2.639,0,0,1,1.992.8,2.891,2.891,0,0,1,.693,2.014v6.317a2.474,2.474,0,0,1-1.167,2.135,4.714,4.714,0,0,1-2.741.8H23.4a2.5,2.5,0,0,1-2.7-2.817Zm4.127,5.81h7.485V44.43H24.827Z"
                transform="translate(-4.823 -9.574)"
                fill="#fff"
              />
              <path
                id="Path_3116"
                data-name="Path 3116"
                d="M51.208,44.43H46.927v8.739H42.8V41.1h4.127v.715a3.369,3.369,0,0,1,1.948-.715h2.333Z"
                transform="translate(-9.971 -9.574)"
                fill="#fff"
              />
              <path
                id="Path_3117"
                data-name="Path 3117"
                d="M71.041,37.665V52.371H59.209a4.678,4.678,0,0,1-2.741-.8,2.486,2.486,0,0,1-1.157-2.135V42.971a2.5,2.5,0,0,1,.821-1.909,2.68,2.68,0,0,1,1.876-.765h8.915V37.665Zm-11.6,11.546h7.485V43.532H59.439Z"
                transform="translate(-12.886 -8.775)"
                fill="#fff"
              />
              <path
                id="Path_3118"
                data-name="Path 3118"
                d="M77.369,50.232V43.938a2.677,2.677,0,0,1,.77-2.047,2.949,2.949,0,0,1,1.926-.792h9.113a4.474,4.474,0,0,1,2.791.842A2.7,2.7,0,0,1,93.075,44.2v4.369H81.5v1.441H91.875v3.159H81.265a4.678,4.678,0,0,1-2.741-.8,2.484,2.484,0,0,1-1.156-2.137m11.59-5.8H81.5v.956h7.462Z"
                transform="translate(-18.025 -9.575)"
                fill="#fff"
              />
              <path
                id="Path_3119"
                data-name="Path 3119"
                d="M99.41,53.17V41.1h13.065a2.776,2.776,0,0,1,1.97.869,2.857,2.857,0,0,1,.693,1.97V53.17h-4.084V44.431h-7.518V53.17Z"
                transform="translate(-23.16 -9.574)"
                fill="#fff"
              />
              <path
                id="Path_3120"
                data-name="Path 3120"
                d="M124.2,52.371a2.893,2.893,0,0,1-1.92-.638,2.836,2.836,0,0,1-.81-2.19V37.665h4.127V40.3h3.952v3.336h-3.952v5.58h3.952v3.159Z"
                transform="translate(-28.299 -8.775)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
);

export const Logo = styled(LogoSvg)`
  top: -35px;
  cursor: pointer;
  z-index: 9999;
  ${media.down.lg}{
    position: absolute;
    top: -45px;
  }
  svg {
    ${media.down.lg} {
      width: 120px;
    }
  }
`;
