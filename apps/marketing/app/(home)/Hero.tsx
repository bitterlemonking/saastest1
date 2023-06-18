import { Button, Icon } from "ui";

export function Hero() {
  return (
    <nav className="to-primary-100 dark:to-primary-950 bg-gradient-to-tr from-white pb-16 pt-48 dark:from-zinc-900 dark:text-white">
      <div className="container text-center">
        <div className="mb-3 flex justify-center">
          <h5 className="bg-primary-500/10 text-primary-500 flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold">
            <Icon.star className="mr-2 block h-4 w-4" /> Built with the ultimate
            SaaS starter kit
          </h5>
        </div>

        <h1 className="text-5xl font-bold lg:text-7xl">
          Your{" "}
          <span className="from-primary-500 to-primary-600 bg-gradient-to-b bg-clip-text text-transparent drop-shadow-[0px_4px_24px_rgba(59,130,246,0.4)]">
            revolutionary
          </span>{" "}
          SaaS
        </h1>

        <p className="mt-5 text-lg opacity-50">
          This is a demo application built with supastarter. <br />
          It will save you a lot of time and effort building your next SaaS.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button size="large">Get started &rarr;</Button>
          <Button size="large" intent="primary-ghost">
            Documentation
          </Button>
        </div>

        <div className="mt-32 px-8 text-center">
          <h5 className="text-primary-900/50 dark:text-primary-100/50 text-xs font-semibold uppercase tracking-wider">
            Built & shipped with these awesome tools
          </h5>

          <div className="text-primary-900/50 dark:text-primary-100/50 mt-4 flex items-center justify-center gap-8">
            {/* Vercel logo */}
            <div className="aspect-[284/64] h-7 w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
                viewBox="0 0 284 65"
                width="100%"
              >
                <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
              </svg>
            </div>

            {/* Supabase logo */}
            <div className="aspect-[581/113] h-8 w-auto">
              <svg
                width="100%"
                viewBox="0 0 581 113"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M151.397 66.7608C151.996 72.3621 157.091 81.9642 171.877 81.9642C184.764 81.9642 190.959 73.7624 190.959 65.7607C190.959 58.559 186.063 52.6577 176.373 50.6571L169.379 49.1569C166.682 48.6568 164.884 47.1565 164.884 44.7559C164.884 41.9552 167.681 39.8549 171.178 39.8549C176.772 39.8549 178.87 43.5556 179.27 46.4564L190.359 43.9558C189.76 38.6546 185.064 29.7527 171.078 29.7527C160.488 29.7527 152.696 37.0543 152.696 45.8561C152.696 52.7576 156.991 58.4591 166.482 60.5594L172.976 62.0598C176.772 62.8599 178.271 64.6605 178.271 66.8609C178.271 69.4615 176.173 71.762 171.777 71.762C165.983 71.762 163.085 68.1611 162.786 64.2602L151.397 66.7608Z" />
                <path d="M233.421 80.4639H246.109C245.909 78.7635 245.609 75.3628 245.609 71.5618V31.2529H232.321V59.8592C232.321 65.5606 228.925 69.5614 223.031 69.5614C216.837 69.5614 214.039 65.1604 214.039 59.6592V31.2529H200.752V62.3599C200.752 73.0622 207.545 81.7642 219.434 81.7642C224.628 81.7642 230.325 79.7638 233.022 75.1627C233.022 77.1631 233.221 79.4636 233.421 80.4639Z" />
                <path d="M273.076 99.4682V75.663C275.473 78.9636 280.469 81.6644 287.263 81.6644C301.149 81.6644 310.439 70.6617 310.439 55.7584C310.439 41.1553 302.148 30.1528 287.762 30.1528C280.37 30.1528 274.875 33.4534 272.677 37.2544V31.253H259.79V99.4682H273.076ZM297.352 55.8585C297.352 64.6606 291.958 69.7616 285.164 69.7616C278.372 69.7616 272.877 64.5605 272.877 55.8585C272.877 47.1566 278.372 42.0554 285.164 42.0554C291.958 42.0554 297.352 47.1566 297.352 55.8585Z" />
                <path d="M317.964 67.0609C317.964 74.7627 324.357 81.8643 334.848 81.8643C342.139 81.8643 346.835 78.4634 349.332 74.5625C349.332 76.463 349.532 79.1635 349.832 80.4639H362.02C361.72 78.7635 361.422 75.2627 361.422 72.6622V48.4567C361.422 38.5545 355.627 29.7527 340.043 29.7527C326.855 29.7527 319.761 38.2544 318.963 45.9562L330.751 48.4567C331.151 44.1558 334.348 40.455 340.141 40.455C345.737 40.455 348.434 43.3556 348.434 46.8564C348.434 48.5568 347.536 49.9572 344.738 50.3572L332.65 52.1576C324.458 53.3579 317.964 58.2589 317.964 67.0609ZM337.644 71.962C333.349 71.962 331.25 69.1614 331.25 66.2608C331.25 62.4599 333.947 60.5594 337.345 60.0594L348.434 58.359V60.5594C348.434 69.2615 343.239 71.962 337.644 71.962Z" />
                <path d="M387.703 80.4641V74.4627C390.299 78.6637 395.494 81.6644 402.288 81.6644C416.276 81.6644 425.467 70.5618 425.467 55.6585C425.467 41.0552 417.174 29.9528 402.788 29.9528C395.494 29.9528 390.1 33.1535 387.902 36.6541V8.04785H374.815V80.4641H387.703ZM412.178 55.7584C412.178 64.7605 406.784 69.7616 399.99 69.7616C393.297 69.7616 387.703 64.6606 387.703 55.7584C387.703 46.7564 393.297 41.8554 399.99 41.8554C406.784 41.8554 412.178 46.7564 412.178 55.7584Z" />
                <path d="M432.99 67.0609C432.99 74.7627 439.383 81.8643 449.873 81.8643C457.165 81.8643 461.862 78.4634 464.358 74.5625C464.358 76.463 464.559 79.1635 464.858 80.4639H477.046C476.748 78.7635 476.448 75.2627 476.448 72.6622V48.4567C476.448 38.5545 470.653 29.7527 455.068 29.7527C441.881 29.7527 434.788 38.2544 433.989 45.9562L445.776 48.4567C446.177 44.1558 449.374 40.455 455.167 40.455C460.763 40.455 463.46 43.3556 463.46 46.8564C463.46 48.5568 462.561 49.9572 459.763 50.3572L447.676 52.1576C439.484 53.3579 432.99 58.2589 432.99 67.0609ZM452.671 71.962C448.375 71.962 446.276 69.1614 446.276 66.2608C446.276 62.4599 448.973 60.5594 452.371 60.0594L463.46 58.359V60.5594C463.46 69.2615 458.265 71.962 452.671 71.962Z" />
                <path d="M485.645 66.7608C486.243 72.3621 491.339 81.9642 506.124 81.9642C519.012 81.9642 525.205 73.7624 525.205 65.7607C525.205 58.559 520.311 52.6577 510.62 50.6571L503.626 49.1569C500.929 48.6568 499.132 47.1565 499.132 44.7559C499.132 41.9552 501.928 39.8549 505.425 39.8549C511.021 39.8549 513.118 43.5556 513.519 46.4564L524.607 43.9558C524.007 38.6546 519.312 29.7527 505.326 29.7527C494.735 29.7527 486.944 37.0543 486.944 45.8561C486.944 52.7576 491.238 58.4591 500.73 60.5594L507.224 62.0598C511.021 62.8599 512.519 64.6605 512.519 66.8609C512.519 69.4615 510.421 71.762 506.025 71.762C500.23 71.762 497.334 68.1611 497.034 64.2602L485.645 66.7608Z" />
                <path d="M545.385 50.2571C545.685 45.7562 549.482 40.5549 556.375 40.5549C563.967 40.5549 567.165 45.3561 567.365 50.2571H545.385ZM568.664 63.0601C567.065 67.4609 563.668 70.5617 557.474 70.5617C550.88 70.5617 545.385 65.8606 545.087 59.3593H580.252C580.252 59.159 580.451 57.1587 580.451 55.2582C580.451 39.4547 571.361 29.7527 556.175 29.7527C543.588 29.7527 531.998 39.9548 531.998 55.6584C531.998 72.262 543.886 81.9642 557.374 81.9642C569.462 81.9642 577.255 74.8626 579.753 66.3607L568.664 63.0601Z" />
                <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" />
                <path
                  d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                  fillOpacity="0.2"
                />
                <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" />
              </svg>
            </div>

            <div className="aspect-[512/64] h-6 w-auto">
              <svg
                width="100%"
                viewBox="0 0 512 64"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M52.898 0C38.792 0 29.976 7.053 26.45 21.16C31.74 14.106 37.912 11.461 44.965 13.225C48.989 14.23 51.865 17.151 55.049 20.382C60.235 25.646 66.238 31.739 79.349 31.739C93.455 31.739 102.271 24.686 105.798 10.579C100.508 17.633 94.336 20.278 87.283 18.514C83.259 17.509 80.383 14.588 77.199 11.357C72.012 6.093 66.01 0 52.898 0ZM26.45 31.739C12.344 31.739 3.52798 38.792 0.000976562 52.899C5.29098 45.845 11.462 43.2 18.515 44.964C22.54 45.971 25.415 48.89 28.599 52.121C33.785 57.385 39.789 63.478 52.899 63.478C67.006 63.478 75.822 56.425 79.349 42.318C74.059 49.372 67.887 52.017 60.834 50.253C56.81 49.248 53.934 46.327 50.75 43.097C45.564 37.832 39.561 31.739 26.45 31.739Z" />
                  <path d="M158.687 26.7469H149.456V44.6149C149.456 49.3799 152.582 49.3049 158.687 49.0069V56.2289C146.329 57.7179 141.415 54.2929 141.415 44.6149V26.7469H134.565V19.0039H141.415V9.00386L149.455 6.62186V19.0039H158.687V26.7469ZM193.879 19.0039H201.919V56.2299H193.879V50.8699C191.049 54.8149 186.657 57.1979 180.849 57.1979C170.725 57.1979 162.312 48.6359 162.312 37.6179C162.312 26.5249 170.725 18.0379 180.85 18.0379C186.657 18.0379 191.05 20.4199 193.879 24.2909V19.0039ZM182.115 49.5299C188.815 49.5299 193.879 44.5409 193.879 37.6179C193.879 30.6949 188.816 25.7059 182.115 25.7059C175.414 25.7059 170.352 30.6939 170.352 37.6179C170.352 44.5419 175.415 49.5299 182.115 49.5299ZM215.32 13.4199C212.49 13.4199 210.183 11.0369 210.183 8.28186C210.186 6.92025 210.728 5.61517 211.691 4.65237C212.653 3.68957 213.958 3.1475 215.32 3.14486C216.682 3.1475 217.987 3.68957 218.949 4.65237C219.912 5.61517 220.454 6.92025 220.457 8.28186C220.457 11.0369 218.149 13.4199 215.32 13.4199ZM211.3 56.2279V19.0039H219.34V56.2299L211.3 56.2279ZM228.646 56.2279V1.88086H236.687V56.2289L228.646 56.2279ZM288.876 19.0029H297.363L285.675 56.2299H277.783L270.04 31.1399L262.223 56.2299H254.332L242.643 19.0049H251.13L258.352 44.6899L266.169 19.0049H273.837L281.58 44.6899L288.876 19.0029ZM307.34 13.4199C304.51 13.4199 302.203 11.0369 302.203 8.28186C302.206 6.92025 302.748 5.61517 303.711 4.65237C304.673 3.68957 305.978 3.1475 307.34 3.14486C308.702 3.1475 310.007 3.68957 310.969 4.65237C311.932 5.61517 312.474 6.92025 312.477 8.28186C312.477 11.0369 310.169 13.4199 307.34 13.4199ZM303.32 56.2279V19.0039H311.36V56.2299L303.32 56.2279ZM340.246 18.0349C348.585 18.0349 354.541 23.6939 354.541 33.3719V56.2279H346.501V34.1919C346.501 28.5339 343.224 25.5559 338.161 25.5559C332.876 25.5559 328.707 28.6829 328.707 36.2759V56.2299H320.667V19.0039H328.707V23.7689C331.164 19.8979 335.184 18.0359 340.247 18.0359L340.246 18.0349ZM392.66 4.11386H400.7V56.2299H392.66V50.8699C389.83 54.8149 385.438 57.1979 379.631 57.1979C369.506 57.1979 361.093 48.6359 361.093 37.6179C361.093 26.5249 369.506 18.0379 379.631 18.0379C385.438 18.0379 389.831 20.4199 392.66 24.2909V4.11386ZM380.896 49.5299C387.596 49.5299 392.659 44.5409 392.659 37.6179C392.659 30.6949 387.596 25.7059 380.896 25.7059C374.196 25.7059 369.133 30.6939 369.133 37.6179C369.133 44.5419 374.195 49.5299 380.896 49.5299ZM427.65 57.1979C416.408 57.1979 407.996 48.6359 407.996 37.6179C407.996 26.5249 416.408 18.0379 427.65 18.0379C434.946 18.0379 441.275 21.8339 444.253 27.6409L437.329 31.6609C435.691 28.1629 432.043 25.9289 427.576 25.9289C421.024 25.9289 416.036 30.9169 416.036 37.6179C416.036 44.3189 421.024 49.3059 427.576 49.3059C432.043 49.3059 435.691 46.9979 437.478 43.5739L444.401 47.5189C441.275 53.4009 434.946 57.1979 427.651 57.1979H427.65ZM457.653 29.2789C457.653 36.0539 477.68 31.9589 477.68 45.7329C477.68 53.1779 471.203 57.1979 463.163 57.1979C455.718 57.1979 450.357 53.8479 447.975 48.4879L454.899 44.4669C456.09 47.8169 459.068 49.8269 463.163 49.8269C466.736 49.8269 469.491 48.6369 469.491 45.6579C469.491 39.0319 449.464 42.7549 449.464 29.4279C449.464 22.4299 455.494 18.0379 463.088 18.0379C469.193 18.0379 474.256 20.8659 476.861 25.7799L470.087 29.5769C468.747 26.6739 466.141 25.3329 463.088 25.3329C460.185 25.3329 457.653 26.5989 457.653 29.2789V29.2789ZM491.975 29.2789C491.975 36.0539 512.002 31.9589 512.002 45.7329C512.002 53.1779 505.525 57.1979 497.484 57.1979C490.039 57.1979 484.679 53.8479 482.296 48.4879L489.22 44.4669C490.411 47.8169 493.39 49.8269 497.484 49.8269C501.058 49.8269 503.812 48.6369 503.812 45.6579C503.812 39.0319 483.785 42.7549 483.785 29.4279C483.785 22.4299 489.815 18.0379 497.41 18.0379C503.514 18.0379 508.577 20.8659 511.183 25.7799L504.408 29.5769C503.068 26.6739 500.462 25.3329 497.41 25.3329C494.506 25.3329 491.975 26.5989 491.975 29.2789V29.2789Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
