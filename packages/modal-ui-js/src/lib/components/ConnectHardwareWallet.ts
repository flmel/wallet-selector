import { ModuleState, Wallet } from "@near-wallet-selector/core";
import { DEFAULT_DERIVATION_PATH, modalState } from "../modal";
import { connectToWallet } from "../render-modal";
import { renderSpecifyDerivationPath } from "./SpecifyDerivationPath";
// @ts-ignore
import { translate } from "../translate/translate";

export function renderConnectHardwareWallet(module: ModuleState<Wallet>) {
  if (!modalState) {
    return;
  }

  modalState.derivationPath = DEFAULT_DERIVATION_PATH;

  document.querySelector(".modal-right")!.innerHTML = `
    <div class="nws-modal-body">
      <div class="nws-modal-header-wrapper">
        <div class="nws-modal-header">
          <h3 class="middleTitle">
            ${translate("ledger.Connect with Ledger")}
          </h3>
          <button class="close-button"><svg
              xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#C1C1C1">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
              </path>
            </svg></button>
        </div>
      </div>
      <div class="derivation-path-wrapper">
        <div class="enter-derivation-path">
          <div class="ledger-image">
            <svg width="317" height="157" viewBox="0 0 317 157" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M249.99 16.0994C270.063 -0.864155 289.788 1.58873 301.497 10.7365C307.402 15.3499 311.278 21.6575 312.267 28.1258C313.247 34.5412 311.413 41.2233 305.692 46.8044C297.366 54.9273 286.343 55.3362 273.015 51.5109C261.654 48.25 249.058 42.0377 235.726 35.4627L235.726 35.4626L235.717 35.458C233.367 34.2992 230.995 33.129 228.602 31.9618C212.742 24.2253 196.067 16.6575 179.842 13.8595C163.538 11.0479 147.552 13.0313 133.266 24.522C128.032 28.732 123.478 35.2086 121.716 44.8205C119.961 54.3947 120.992 66.9771 126.703 83.4311C135.432 108.583 132.899 126.677 123.575 138.063C114.217 149.491 97.5614 154.733 76.7887 153.121C55.0043 151.43 29.0621 142.206 3.29867 125.227L0.887817 127.942C27.2472 145.405 53.9251 154.952 76.5105 156.705C97.9028 158.365 115.96 153.035 126.356 140.341C136.785 127.606 139.045 108.029 130.099 82.2524C124.521 66.1801 123.642 54.2493 125.252 45.4687C126.854 36.7258 130.94 31.006 135.519 27.3232C148.794 16.6458 163.649 14.715 179.231 17.4021C194.891 20.1027 211.146 27.4463 227.026 35.1928C229.381 36.3415 231.729 37.5001 234.066 38.6531L234.073 38.6568C247.382 45.223 260.324 51.608 272.024 54.9662C285.819 58.9258 298.493 58.8501 308.202 49.3776C314.764 42.9759 316.974 35.1288 315.82 27.5826C314.675 20.0893 310.237 13.0029 303.71 7.90363C290.555 -2.37382 268.938 -4.62038 247.67 13.3537L249.99 16.0994Z"
                fill="url(#paint0_linear_3_672)"></path>
              <path d="M260.264 17.8767L177.605 89.4649L157.679 73.9664L239.23 3.85423L260.264 17.8767Z" fill="#6A7075">
              </path>
              <path d="M205.939 54.4577L199.764 50.2636L233.316 20.9053L239.907 25.8395L205.939 54.4577Z" fill="#494E52">
              </path>
              <path d="M260.264 17.8757L177.605 89.4639L182.033 98.3202L264.323 26.363L260.264 17.8757Z" fill="#494E52">
              </path>
              <path d="M177.236 89.4646L181.295 98.3209L165.059 85.7745L170.963 85.0365L177.236 89.4646Z" fill="black">
              </path>
              <path d="M93.4708 99.6384L91.9948 110.13L174.653 92.894L164.69 85.7749L93.4708 99.6384Z" fill="#DCDADA">
              </path>
              <path d="M93.1157 104.323L94.314 100.129L165.613 86.3483L169.208 89.344L93.1157 104.323Z" fill="#C1C1C1">
              </path>
              <path d="M94.2086 99.7963L86.0903 101.272L92.3635 110.129L94.2086 99.7963Z" fill="#B3AAAA"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M86.0903 100.907L89.0027 74.1304L178.455 55.2416C184.695 53.9962 195.766 54.7675 197.177 63.7058C198.284 70.717 195.506 73.9943 191.628 77.3592C188.495 80.0671 180.152 82.4646 178.343 82.8944C178.293 82.9064 178.241 82.9188 178.186 82.9319C177.38 83.1245 176.007 83.4525 170.644 84.5088C169.085 84.8158 167.382 85.1501 165.557 85.5078L164.933 85.63C146.312 89.2764 115.528 95.2297 93.9844 99.3849C91.1808 99.9257 88.5337 100.436 86.0903 100.907ZM185.076 75.554C190.748 73.3535 193.99 68.0745 192.318 63.7631C190.645 59.4517 184.691 57.7405 179.019 59.941C173.347 62.1416 170.105 67.4206 171.778 71.732C173.45 76.0434 179.404 77.7546 185.076 75.554Z"
                fill="#F4F1E8"></path>
              <path d="M199.764 50.3994L196.768 48.3043L232.194 18.0454L233.316 21.6403L199.764 50.3994Z" fill="black">
              </path>
              <path d="M239.968 25.9943L232.588 20.4592V17.5071L241.813 24.5183L239.968 25.9943Z" fill="black"></path>
              <ellipse cx="182.084" cy="68.0811" rx="10.242" ry="7.46772" transform="rotate(-23.7949 182.084 68.0811)"
                fill="#494E52"></ellipse>
              <ellipse cx="182.084" cy="68.0816" rx="6.68462" ry="4.87394" transform="rotate(-23.7949 182.084 68.0816)"
                fill="#494E52"></ellipse>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M238.725 2.93094L260.368 17.2564L264.865 26.4556L181.615 99.0341L175.16 94.311L92.0028 110.947L85.3267 101.399L88.3269 73.8157L178.118 54.8553L238.725 2.93094ZM178.599 56.2622L89.6786 75.0388L86.9321 100.29C89.0979 99.8725 91.4124 99.4263 93.8446 98.9572C115.388 94.8019 146.171 88.8488 164.791 85.2026L165.415 85.0804C167.24 84.7228 168.943 84.3885 170.501 84.0816C175.853 83.0275 177.219 82.701 178.015 82.5107C178.07 82.4976 178.122 82.4852 178.173 82.4732C179.048 82.2652 181.558 81.5669 184.235 80.5851C186.742 79.6655 189.286 78.5354 190.802 77.3758L191.151 77.0922L191.644 76.6595C193.341 75.147 194.723 73.6739 195.61 71.871C196.571 69.916 196.982 67.5029 196.448 64.1178C195.8 60.0131 192.959 57.7574 189.408 56.6566C185.833 55.5483 181.637 55.6566 178.603 56.2615C178.601 56.2617 178.6 56.262 178.599 56.2622ZM192.631 77.7565L259.555 18.9531L263.042 26.0869L181.808 96.9078L178.132 89.5713L191.724 78.529C191.859 78.4249 191.988 78.32 192.11 78.2144L192.111 78.2136C192.286 78.0617 192.46 77.9094 192.631 77.7565ZM185.491 81.6908C185.24 81.7868 184.99 81.8802 184.743 81.9709C182.013 82.9723 179.447 83.6875 178.514 83.9093C178.463 83.9213 178.411 83.9338 178.356 83.9468C177.635 84.1192 176.472 84.3971 172.491 85.1919L177.172 88.4492L185.491 81.6908ZM176.631 89.8707L170.479 85.5903C169.306 85.8213 168.054 86.0673 166.731 86.3265L175.769 92.9276L179.548 95.6924L176.631 89.8707ZM164.758 86.7132C146.252 90.3362 116.027 96.1817 94.6324 100.308L93.2258 109.197L173.543 93.1293L164.758 86.7132ZM91.888 108.207L93.0909 100.606C91.0848 100.993 89.1642 101.363 87.3471 101.713L91.888 108.207ZM258.581 17.8436L197.306 71.6841C198.142 69.5779 198.41 67.0795 197.906 63.8876C197.143 59.0539 193.743 56.4549 189.845 55.2467C186.921 54.3402 183.662 54.1916 180.861 54.449L238.84 4.77668L258.581 17.8436ZM232.505 16.82L243.089 24.5643L205.915 56.5106L196.042 48.0665L232.505 16.82ZM232.118 19.096L198.312 48.0654L199.744 49.29L232.584 20.9424L232.118 19.096ZM233.456 22.1396L200.878 50.2604L205.913 54.5664L239.041 26.0969L233.456 22.1396ZM240.195 25.1054L240.717 24.6571L233.759 19.5663L234.06 20.7586L240.195 25.1054Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M190.194 69.9744C191.32 68.1409 191.576 66.2271 190.942 64.5937C190.308 62.9603 188.829 61.7198 186.761 61.1254C184.691 60.5307 182.116 60.6196 179.553 61.6139C176.991 62.6081 175.029 64.2794 173.902 66.1141C172.776 67.9477 172.52 69.8614 173.154 71.4948C173.788 73.1282 175.267 74.3687 177.335 74.9631C179.405 75.5578 181.98 75.4689 184.543 74.4746C187.105 73.4804 189.067 71.8091 190.194 69.9744ZM185.077 75.8508C190.749 73.6502 193.991 68.3712 192.318 64.0598C190.645 59.7484 184.691 58.0372 179.019 60.2378C173.347 62.4383 170.105 67.7173 171.778 72.0287C173.451 76.3401 179.405 78.0513 185.077 75.8508Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M187.391 69.169C188.127 67.9713 188.266 66.7721 187.881 65.7812C187.497 64.7903 186.586 63.9984 185.235 63.6102C183.883 63.2216 182.173 63.2741 180.456 63.9404C178.738 64.6068 177.441 65.7208 176.705 66.9196C175.969 68.1172 175.83 69.3165 176.215 70.3074C176.599 71.2983 177.511 72.0901 178.861 72.4783C180.214 72.8669 181.923 72.8144 183.64 72.1481C185.358 71.4818 186.655 70.3678 187.391 69.169ZM184.174 73.5242C188.156 71.9795 190.432 68.2738 189.257 65.2473C188.083 62.2208 183.904 61.0196 179.922 62.5643C175.94 64.1091 173.665 67.8148 174.839 70.8412C176.013 73.8677 180.193 75.0689 184.174 73.5242Z"
                fill="black"></path>
              <path
                d="M240.499 41.2441C239.744 40.3649 239.844 39.04 240.724 38.285L249.781 30.5067C250.66 29.7516 251.985 29.8523 252.74 30.7315V30.7315C253.495 31.6108 253.395 32.9356 252.516 33.6907L243.458 41.469C242.579 42.224 241.254 42.1234 240.499 41.2441V41.2441Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M250.743 31.6265L241.685 39.4048C241.424 39.6287 241.395 40.0217 241.619 40.2825C241.842 40.5433 242.235 40.5731 242.496 40.3492L251.554 32.5709C251.815 32.3469 251.845 31.954 251.621 31.6932C251.397 31.4324 251.004 31.4025 250.743 31.6265ZM240.724 38.285C239.844 39.04 239.744 40.3649 240.499 41.2441C241.254 42.1234 242.579 42.224 243.458 41.469L252.516 33.6907C253.395 32.9356 253.495 31.6108 252.74 30.7315C251.985 29.8523 250.66 29.7516 249.781 30.5067L240.724 38.285Z"
                fill="black"></path>
              <path
                d="M205.779 71.4647C205.005 70.5642 205.108 69.2073 206.009 68.4339L214.989 60.7218C215.89 59.9485 217.247 60.0516 218.02 60.9521V60.9521C218.793 61.8526 218.69 63.2095 217.79 63.9829L208.809 71.695C207.909 72.4683 206.552 72.3652 205.779 71.4647V71.4647Z"
                fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M215.951 61.8416L206.97 69.5537C206.688 69.796 206.656 70.221 206.898 70.5031C207.141 70.7851 207.566 70.8174 207.848 70.5752L216.828 62.863C217.11 62.6208 217.143 62.1958 216.9 61.9137C216.658 61.6317 216.233 61.5994 215.951 61.8416ZM206.009 68.4339C205.108 69.2073 205.005 70.5642 205.779 71.4647C206.552 72.3652 207.909 72.4683 208.809 71.695L217.79 63.9829C218.69 63.2095 218.793 61.8526 218.02 60.9521C217.247 60.0516 215.89 59.9485 214.989 60.7218L206.009 68.4339Z"
                fill="black"></path>
              <circle cx="141.356" cy="19.525" r="10.1855" fill="#FE89B4"></circle>
              <ellipse cx="139.062" cy="14.7094" rx="2.42519" ry="1.94015" transform="rotate(-34.544 139.062 14.7094)"
                fill="#FDF7FF"></ellipse>
              <circle cx="252.489" cy="79.7577" r="7.78893" fill="#EC5236"></circle>
              <ellipse cx="250.434" cy="76.3701" rx="2.61272" ry="2.09018" transform="rotate(-34.544 250.434 76.3701)"
                fill="#EDB69D"></ellipse>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M100.436 79.9254C100.461 79.6567 100.732 79.3897 101.042 79.329L106.657 78.2299C107.587 78.0478 108.281 78.5536 108.207 79.3596L107.759 84.2243C107.734 84.493 107.463 84.76 107.153 84.8207L100.416 86.1396C100.106 86.2003 99.8742 86.0317 99.899 85.7631L100.436 79.9254Z"
                fill="#B3AAAA"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M95.8553 81.7775C95.9294 80.9715 96.7437 80.1704 97.6739 79.9883L98.7968 79.7685C99.1069 79.7078 99.3382 79.8764 99.3135 80.1451L99.1344 82.091C99.1096 82.3597 98.8382 82.6267 98.5282 82.6874L96.2824 83.127C95.9723 83.1877 95.741 83.0191 95.7657 82.7505L95.8553 81.7775Z"
                fill="#B3AAAA"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M95.5865 84.6965C95.6112 84.4278 95.8826 84.1608 96.1927 84.1001L98.4385 83.6605C98.7486 83.5998 98.9799 83.7684 98.9552 84.037L98.7761 85.9829C98.7513 86.2516 98.4799 86.5186 98.1699 86.5793L95.9241 87.019C95.614 87.0797 95.3827 86.9111 95.4074 86.6424L95.5865 84.6965Z"
                fill="#B3AAAA"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M95.2282 88.5884C95.2529 88.3197 95.5244 88.0527 95.8344 87.992L98.0802 87.5524C98.3903 87.4917 98.6216 87.6603 98.5969 87.929L98.4178 89.8749C98.3931 90.1435 98.1216 90.4105 97.8116 90.4712L96.6887 90.6911C95.7584 90.8732 95.0645 90.3674 95.1387 89.5614L95.2282 88.5884Z"
                fill="#B3AAAA"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M99.7197 87.709C99.7444 87.4403 100.016 87.1733 100.326 87.1126L102.572 86.673C102.882 86.6123 103.113 86.7809 103.088 87.0496L102.909 88.9955C102.885 89.2641 102.613 89.5312 102.303 89.5919L100.057 90.0315C99.7472 90.0922 99.5159 89.9236 99.5406 89.6549L99.7197 87.709Z"
                fill="#B3AAAA"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M104.211 86.8298C104.236 86.5611 104.507 86.2941 104.817 86.2334L107.063 85.7938C107.373 85.7331 107.605 85.9017 107.58 86.1704L107.49 87.1433C107.416 87.9493 106.602 88.7504 105.672 88.9325L104.549 89.1523C104.239 89.213 104.007 89.0444 104.032 88.7757L104.211 86.8298Z"
                fill="#B3AAAA"></path>
              <defs>
                <linearGradient id="paint0_linear_3_672" x1="-44.5195" y1="122.42" x2="263.357" y2="-8.65023"
                  gradientUnits="userSpaceOnUse">
                  <stop offset="0.110697" stop-color="#232323"></stop>
                  <stop offset="1" stop-color="#3D3D3D"></stop>
                </linearGradient>
              </defs>
            </svg></div>
          <div class="ledger-description">
            <p> ${translate("ledger.Make sure your Ledger")} </p>
            <p class="specify-path" id="specify-derivation-path-button">${translate(
              "ledger.Specify HD Path"
            )}</p>
          </div>
          <div class="action-buttons"><button class="middleButton" id="continue-button">${translate(
            "ledger.Continue"
          )}</button></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("continue-button")?.addEventListener("click", () => {
    connectToWallet(module);
  });

  document
    .getElementById("specify-derivation-path-button")
    ?.addEventListener("click", () => {
      renderSpecifyDerivationPath(module);
    });
}
