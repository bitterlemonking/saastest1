import { Button } from "@ui/components/button";

export function Hero() {
  return (
    <nav className="to-primary/10 border-b bg-gradient-to-b from-transparent pb-20 pt-8">
      <div className="container text-center">
        <h1 className="mx-auto max-w-3xl text-5xl font-bold lg:text-7xl">
          Your revolutionary <span className="text-primary">Next.js</span> SaaS
        </h1>

        <p className="mt-4 text-lg opacity-75">
          This is a demo application built with supastarter. <br />
          It will save you a lot of time and effort building your next SaaS.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
          <Button size="lg">Get started &rarr;</Button>
          <Button variant="outline" size="lg">
            Documentation
          </Button>
        </div>

        <div className="mt-16 px-8 text-center">
          <h5 className="text-foreground/50 text-xs font-semibold uppercase tracking-wider">
            Built & shipped with these awesome tools
          </h5>

          <div className="text-foreground/50 mt-4 flex flex-col-reverse items-center justify-center gap-4 md:flex-row md:gap-8">
            {/* Vercel logo */}
            <div className="aspect-[284/64] h-6 w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
                viewBox="0 0 284 65"
                width="100%"
              >
                <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
              </svg>
            </div>

            <div className="aspect-[631/236] h-10 w-auto">
              <svg
                width="100%"
                viewBox="0 0 631 236"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M253.446 103.607C245.506 103.607 239.038 101.854 234.04 98.3478C229.043 94.8414 225.98 89.9043 224.851 83.5365L237.788 81.5415C238.594 84.927 240.448 87.6071 243.35 89.5819C246.292 91.5165 249.94 92.4837 254.292 92.4837C258.242 92.4837 261.325 91.6777 263.542 90.0656C265.799 88.4534 266.927 86.2368 266.927 83.4156C266.927 81.7632 266.524 80.4332 265.718 79.4256C264.952 78.3778 263.32 77.3903 260.821 76.4634C258.323 75.5364 254.514 74.3878 249.395 73.0175C243.793 71.5666 239.34 70.0149 236.035 68.3625C232.771 66.6698 230.433 64.7151 229.022 62.4985C227.652 60.2415 226.967 57.5211 226.967 54.3371C226.967 50.3875 228.015 46.9416 230.111 43.9995C232.206 41.0574 235.148 38.7803 238.937 37.1682C242.766 35.5561 247.239 34.75 252.358 34.75C257.355 34.75 261.809 35.5359 265.718 37.1077C269.627 38.6795 272.791 40.9163 275.209 43.8181C277.628 46.6796 279.078 50.0449 279.562 53.914L266.625 56.2717C266.182 53.1281 264.711 50.6494 262.212 48.8358C259.713 47.0222 256.469 46.0348 252.479 45.8736C248.65 45.7124 245.547 46.3572 243.169 47.8081C240.791 49.2187 239.602 51.1734 239.602 53.6722C239.602 55.1231 240.045 56.3523 240.932 57.3599C241.859 58.3674 243.632 59.3347 246.252 60.2617C248.872 61.1886 252.741 62.2969 257.859 63.5866C263.34 64.9972 267.693 66.569 270.917 68.3021C274.141 69.9948 276.439 72.0301 277.809 74.4079C279.22 76.7455 279.925 79.5868 279.925 82.932C279.925 89.3804 277.567 94.4384 272.852 98.106C268.177 101.774 261.708 103.607 253.446 103.607Z"
                  fill="currentColor"
                />
                <path
                  d="M314.279 103.607C309.765 103.607 305.976 102.882 302.913 101.431C299.85 99.98 297.352 98.0858 295.417 95.7482C293.523 93.3704 292.072 90.791 291.064 88.0101C290.057 85.2292 289.372 82.5088 289.009 79.8488C288.646 77.1888 288.465 74.8513 288.465 72.8361V36.5636H301.281V68.6648C301.281 71.2039 301.483 73.8235 301.886 76.5238C302.329 79.1838 303.135 81.6624 304.304 83.9597C305.513 86.2569 307.186 88.1109 309.322 89.5215C311.498 90.9321 314.319 91.6374 317.785 91.6374C320.042 91.6374 322.178 91.2746 324.193 90.5492C326.208 89.7834 327.962 88.5744 329.453 86.9219C330.984 85.2695 332.173 83.0932 333.02 80.3929C333.906 77.6926 334.35 74.4079 334.35 70.5389L342.209 73.5011C342.209 79.4256 341.1 84.665 338.884 89.2192C336.667 93.7331 333.483 97.2596 329.332 99.7987C325.181 102.338 320.163 103.607 314.279 103.607ZM335.861 101.854V82.9924H334.35V36.5636H347.105V101.854H335.861Z"
                  fill="currentColor"
                />
                <path
                  d="M391.084 103.668C384.837 103.668 379.598 102.156 375.366 99.1337C371.134 96.0707 367.93 91.9396 365.754 86.7406C363.577 81.5415 362.489 75.6775 362.489 69.1484C362.489 62.6194 363.557 56.7553 365.693 51.5563C367.87 46.3572 371.053 42.2665 375.245 39.2841C379.477 36.2614 384.676 34.75 390.842 34.75C396.968 34.75 402.248 36.2614 406.681 39.2841C411.155 42.2665 414.601 46.3572 417.019 51.5563C419.437 56.715 420.646 62.5791 420.646 69.1484C420.646 75.6775 419.437 81.5617 417.019 86.801C414.641 92.0001 411.235 96.111 406.802 99.1337C402.409 102.156 397.17 103.668 391.084 103.668ZM360.373 130.872V36.5636H371.618V83.5365H373.069V130.872H360.373ZM389.331 92.2419C393.361 92.2419 396.686 91.2142 399.306 89.1587C401.966 87.1033 403.941 84.3426 405.23 80.8765C406.56 77.3702 407.225 73.4608 407.225 69.1484C407.225 64.8763 406.56 61.0073 405.23 57.5412C403.941 54.0752 401.946 51.3144 399.245 49.259C396.545 47.2036 393.099 46.1758 388.908 46.1758C384.958 46.1758 381.693 47.1431 379.114 49.0776C376.575 51.0122 374.681 53.7125 373.431 57.1785C372.222 60.6445 371.618 64.6345 371.618 69.1484C371.618 73.6623 372.222 77.6523 373.431 81.1183C374.64 84.5844 376.555 87.3048 379.174 89.2797C381.794 91.2545 385.18 92.2419 389.331 92.2419Z"
                  fill="currentColor"
                />
                <path
                  d="M448.805 103.668C443.969 103.668 439.919 102.781 436.654 101.008C433.39 99.1941 430.911 96.8163 429.218 93.8742C427.566 90.8918 426.74 87.6272 426.74 84.0806C426.74 80.7758 427.324 77.874 428.493 75.3752C429.662 72.8764 431.395 70.7605 433.692 69.0275C435.989 67.2542 438.81 65.8234 442.155 64.7353C445.057 63.8889 448.342 63.1433 452.009 62.4985C455.677 61.8536 459.526 61.2491 463.556 60.6848C467.627 60.1206 471.657 59.5564 475.647 58.9921L471.053 61.5312C471.133 56.4127 470.045 52.6243 467.788 50.1658C465.571 47.667 461.743 46.4177 456.302 46.4177C452.876 46.4177 449.732 47.2237 446.871 48.8358C444.009 50.4076 442.014 53.0273 440.886 56.6949L429.097 53.0676C430.709 47.4655 433.772 43.0121 438.286 39.7072C442.841 36.4024 448.886 34.75 456.423 34.75C462.267 34.75 467.345 35.7576 471.657 37.7727C476.01 39.7475 479.194 42.8912 481.209 47.2036C482.257 49.3396 482.902 51.5966 483.143 53.9744C483.385 56.3523 483.506 58.9115 483.506 61.6521V101.854H472.322V86.9219L474.498 88.8565C471.798 93.854 468.352 97.582 464.161 100.04C460.01 102.459 454.891 103.668 448.805 103.668ZM451.042 93.3301C454.629 93.3301 457.712 92.7054 460.292 91.456C462.871 90.1663 464.947 88.5341 466.518 86.5592C468.09 84.5844 469.118 82.5289 469.602 80.3929C470.287 78.4584 470.67 76.282 470.75 73.8638C470.871 71.4457 470.932 69.5111 470.932 68.0602L475.043 69.5716C471.053 70.1761 467.425 70.7202 464.161 71.2039C460.896 71.6875 457.934 72.1711 455.274 72.6548C452.654 73.0981 450.317 73.6422 448.261 74.287C446.528 74.8916 444.977 75.617 443.606 76.4634C442.276 77.3097 441.208 78.3375 440.402 79.5465C439.637 80.7556 439.254 82.2267 439.254 83.9597C439.254 85.6524 439.677 87.2242 440.523 88.6751C441.37 90.0857 442.659 91.2142 444.392 92.0605C446.125 92.9069 448.342 93.3301 451.042 93.3301Z"
                  fill="currentColor"
                />
                <path
                  d="M256.278 215.015C247.597 215.015 240.544 213.062 235.119 209.156C229.694 205.249 226.395 199.759 225.223 192.684L241.239 190.21C242.064 193.683 243.886 196.417 246.708 198.413C249.529 200.41 253.088 201.408 257.385 201.408C261.161 201.408 264.069 200.67 266.109 199.195C268.192 197.676 269.234 195.614 269.234 193.01C269.234 191.404 268.843 190.123 268.062 189.169C267.324 188.17 265.675 187.215 263.114 186.304C260.553 185.393 256.625 184.242 251.33 182.853C245.427 181.291 240.74 179.62 237.267 177.84C233.795 176.018 231.3 173.869 229.78 171.395C228.261 168.921 227.502 165.926 227.502 162.411C227.502 158.027 228.652 154.208 230.952 150.952C233.253 147.697 236.465 145.201 240.588 143.465C244.711 141.686 249.572 140.796 255.171 140.796C260.64 140.796 265.479 141.642 269.69 143.335C273.943 145.028 277.372 147.437 279.976 150.562C282.58 153.687 284.186 157.354 284.794 161.564L268.778 164.429C268.387 161.434 267.02 159.069 264.676 157.333C262.376 155.596 259.294 154.62 255.432 154.403C251.742 154.186 248.769 154.75 246.512 156.096C244.255 157.398 243.127 159.242 243.127 161.629C243.127 162.975 243.583 164.125 244.494 165.08C245.406 166.035 247.228 166.99 249.963 167.945C252.741 168.899 256.864 170.071 262.333 171.46C267.932 172.893 272.402 174.542 275.744 176.408C279.13 178.231 281.56 180.423 283.036 182.984C284.555 185.544 285.315 188.648 285.315 192.294C285.315 199.368 282.732 204.924 277.567 208.96C272.446 212.997 265.349 215.015 256.278 215.015Z"
                  fill="currentColor"
                />
                <path
                  d="M336.879 213.062C332.235 213.93 327.678 214.299 323.207 214.169C318.78 214.082 314.809 213.279 311.293 211.76C307.778 210.197 305.108 207.745 303.285 204.403C301.68 201.365 300.833 198.262 300.746 195.093C300.66 191.925 300.616 188.344 300.616 184.351V123.218H316.241V183.439C316.241 186.261 316.263 188.735 316.306 190.861C316.393 192.988 316.849 194.724 317.674 196.07C319.236 198.674 321.732 200.128 325.161 200.432C328.589 200.736 332.496 200.562 336.879 199.911V213.062ZM287.856 155.054V142.749H336.879V155.054H287.856Z"
                  fill="currentColor"
                />
                <path
                  d="M367.754 215.015C362.676 215.015 358.379 214.06 354.863 212.151C351.348 210.197 348.679 207.615 346.856 204.403C345.076 201.191 344.186 197.654 344.186 193.791C344.186 190.406 344.751 187.367 345.879 184.676C347.008 181.942 348.744 179.598 351.087 177.645C353.431 175.649 356.469 174.021 360.202 172.762C363.023 171.851 366.322 171.026 370.098 170.288C373.917 169.55 378.041 168.878 382.468 168.27C386.938 167.619 391.604 166.925 396.465 166.187L390.866 169.377C390.91 164.516 389.825 160.935 387.611 158.635C385.398 156.334 381.665 155.184 376.413 155.184C373.245 155.184 370.185 155.922 367.233 157.398C364.282 158.873 362.22 161.412 361.048 165.015L346.725 160.523C348.462 154.576 351.76 149.802 356.621 146.2C361.526 142.597 368.123 140.796 376.413 140.796C382.663 140.796 388.154 141.816 392.885 143.856C397.659 145.896 401.196 149.238 403.497 153.882C404.755 156.356 405.515 158.895 405.775 161.499C406.036 164.06 406.166 166.859 406.166 169.898V213.062H392.429V197.828L394.707 200.301C391.539 205.38 387.828 209.112 383.575 211.499C379.364 213.843 374.091 215.015 367.754 215.015ZM370.879 202.515C374.438 202.515 377.476 201.886 379.994 200.627C382.511 199.368 384.508 197.828 385.983 196.005C387.503 194.182 388.523 192.467 389.043 190.861C389.868 188.865 390.324 186.586 390.411 184.025C390.541 181.421 390.606 179.316 390.606 177.71L395.424 179.143C390.693 179.88 386.634 180.531 383.249 181.096C379.864 181.66 376.956 182.202 374.525 182.723C372.094 183.201 369.946 183.743 368.08 184.351C366.257 185.002 364.716 185.761 363.457 186.63C362.199 187.498 361.222 188.496 360.528 189.624C359.877 190.753 359.551 192.077 359.551 193.596C359.551 195.332 359.985 196.873 360.853 198.218C361.721 199.52 362.98 200.562 364.629 201.343C366.322 202.124 368.405 202.515 370.879 202.515Z"
                  fill="currentColor"
                />
                <path
                  d="M419.209 213.062V142.749H433.076V159.872L431.384 157.658C432.252 155.314 433.402 153.188 434.834 151.278C436.31 149.325 438.068 147.719 440.108 146.46C441.844 145.288 443.753 144.377 445.837 143.726C447.964 143.031 450.286 142.879 452.5 142.749C455 142.749 457.5 142.749 459.498 142.749V155.054C454 155.054 453 154.854 450 155.354C447 155.854 445.5 156.774 443.5 157.854C441.5 158.934 440.5 159.854 438.5 163.354C436.5 166.854 436.592 167.489 435.941 169.833C435.29 172.133 434.964 174.629 434.964 177.32V213.062H419.209Z"
                  fill="currentColor"
                />
                <path
                  d="M508.521 213.062C503.877 213.93 499.32 214.299 494.849 214.169C490.422 214.082 486.451 213.279 482.935 211.76C479.42 210.197 476.75 207.745 474.927 204.403C473.321 201.365 472.475 198.262 472.388 195.093C472.301 191.925 472.258 188.344 472.258 184.351V123.218H487.883V183.439C487.883 186.261 487.905 188.735 487.948 190.861C488.035 192.988 488.491 194.724 489.315 196.07C490.878 198.674 493.374 200.128 496.802 200.432C500.231 200.736 504.138 200.562 508.521 199.911V213.062ZM459.498 155.054V142.749H508.521V155.054H459.498Z"
                  fill="currentColor"
                />
                <path
                  d="M548.14 215.015C541.022 215.015 534.772 213.474 529.39 210.393C524.008 207.311 519.798 203.036 516.76 197.567C513.765 192.098 512.268 185.805 512.268 178.687C512.268 171.004 513.744 164.342 516.695 158.7C519.646 153.014 523.748 148.609 529 145.484C534.251 142.358 540.328 140.796 547.229 140.796C554.521 140.796 560.706 142.51 565.784 145.939C570.905 149.325 574.703 154.121 577.177 160.327C579.651 166.534 580.584 173.847 579.977 182.268H564.417V176.538C564.373 168.899 563.028 163.322 560.38 159.807C557.732 156.291 553.566 154.533 547.88 154.533C541.456 154.533 536.682 156.53 533.557 160.523C530.432 164.472 528.869 170.267 528.869 177.906C528.869 185.024 530.432 190.536 533.557 194.442C536.682 198.348 541.239 200.301 547.229 200.301C551.092 200.301 554.412 199.455 557.19 197.762C560.011 196.026 562.181 193.531 563.7 190.275L579.195 194.963C576.504 201.3 572.338 206.226 566.695 209.742C561.096 213.257 554.911 215.015 548.14 215.015ZM523.922 182.268V170.419H572.294V182.268H523.922Z"
                  fill="currentColor"
                />
                <path
                  d="M590.597 213.062V142.749H604.464V159.872L602.771 157.658C603.639 155.314 604.789 153.188 606.222 151.278C607.697 149.325 609.455 147.719 611.495 146.46C613.231 145.288 615.141 144.377 617.224 143.726C619.351 143.031 621.521 142.619 623.735 142.489C625.948 142.315 628.097 142.402 630.18 142.749V157.398C628.097 156.79 625.688 156.595 622.954 156.812C620.263 157.029 617.832 157.788 615.662 159.09C613.492 160.262 611.712 161.76 610.323 163.583C608.978 165.405 607.98 167.489 607.329 169.833C606.677 172.133 606.352 174.629 606.352 177.32V213.062H590.597Z"
                  fill="currentColor"
                />
                <path
                  d="M95.7907 166.232L68.7734 227.157M102.266 210.956L95.365 226.488M55.6706 190.252L48.7694 205.784M64.8725 169.543L46.752 161.491M46.752 161.491C46.752 161.491 7.7812 168.973 7.49269 162.645C7.20417 156.318 18.1315 131.726 24.7459 123.816C31.3603 115.906 70.9066 107.13 70.9066 107.13M46.752 161.491L70.9066 107.13M70.9066 107.13C70.9066 107.13 98.7288 59.0474 118.356 35.2215C137.984 11.3955 155.894 4.73319 164.307 8.47134C172.72 12.2095 179.833 29.9907 175.306 60.5262C170.779 91.0618 153.743 143.937 153.743 143.937M111.468 190.247L129.589 198.298M129.589 198.298C129.589 198.298 150.156 232.235 155.045 228.208C159.935 224.181 170.861 199.588 172.299 189.378C173.736 179.168 153.743 143.937 153.743 143.937M129.589 198.298L153.743 143.937M138.712 106.26C135.218 114.124 126.011 117.666 118.148 114.172C110.285 110.678 106.743 101.471 110.237 93.608C113.73 85.7448 122.937 82.2028 130.8 85.6967C138.663 89.1905 142.205 98.3972 138.712 106.26Z"
                  stroke="url(#paint0_linear_747_2)"
                  strokeWidth="14.1634"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_747_2"
                    x1="64.1781"
                    y1="233.876"
                    x2="20.681"
                    y2="22.6464"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="currentColor" />
                    <stop offset="0.828125" stopColor="currentColor" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Supabase logo */}
            <div className="aspect-[581/113] h-7 w-auto">
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
