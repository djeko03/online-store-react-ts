import React from 'react';

const Header = () => {
    return (
        <section className='header'>
            <div className='logo' style={{display:'flex', alignItems:'center'}}>
                <div className='smile'>
                    <div style={{display:'flex'}}>
                        <div style={{marginRight:'2px'}}>
                            <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.225147 3.33137C1.7887 1.27854 4.60645 0 7.711 0C10.8155 0 13.6333 1.27854 15.1969 3.33137C15.5659 3.81589 15.4714 4.50716 14.9858 4.87537C14.5001 5.24357 13.8073 5.14928 13.4383 4.66476C12.3661 3.25707 10.2569 2.20377 7.711 2.20377C5.16509 2.20377 3.05591 3.25707 1.98374 4.66476C1.6147 5.14928 0.921857 5.24357 0.436236 4.87537C-0.0493858 4.50716 -0.143894 3.81589 0.225147 3.33137Z" fill="#414141"/>
                            </svg>
                        </div>
                        <div style={{marginLeft:'1px'}}>
                            <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.225147 3.33137C1.7887 1.27854 4.60645 0 7.711 0C10.8155 0 13.6333 1.27854 15.1969 3.33137C15.5659 3.81589 15.4714 4.50716 14.9858 4.87537C14.5001 5.24357 13.8073 5.14928 13.4383 4.66476C12.3661 3.25707 10.2569 2.20377 7.711 2.20377C5.16509 2.20377 3.05591 3.25707 1.98374 4.66476C1.6147 5.14928 0.921857 5.24357 0.436236 4.87537C-0.0493858 4.50716 -0.143894 3.81589 0.225147 3.33137Z" fill="#414141"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6689 0.819H1.28623C0.628716 0.819 0.0917938 1.37636 0.15209 2.03428C0.841188 9.84881 8.11117 15.9999 16.9776 15.9999C25.844 15.9999 33.1139 9.85169 33.803 2.03428C33.8605 1.37636 33.3264 0.819 32.6689 0.819Z" fill="#FF6633"/>
                        </svg>
                    </div>
                </div>
                <div style={{marginLeft:'11px'}}>
                    <svg width="101" height="11" viewBox="0 0 101 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.95251 7.21853C6.74735 7.36992 6.50247 7.48839 6.22451 7.58712C5.94654 7.68585 5.69505 7.73193 5.46342 7.73193C4.71556 7.73193 4.0736 7.47523 3.55076 6.96842C3.02792 6.45502 2.76981 5.82974 2.76981 5.09256C2.76981 4.34879 3.02792 3.72351 3.55076 3.21011C4.0736 2.69014 4.71556 2.43344 5.46342 2.43344C5.69505 2.43344 5.95316 2.4861 6.23775 2.58483C6.52233 2.68356 6.7672 2.8152 6.9856 2.97975C7.17091 3.11138 7.38269 3.09164 7.48197 2.95342L8.48793 1.48564C8.57397 1.36058 8.53426 1.16312 8.37542 1.05123C7.98495 0.768204 7.51506 0.537835 6.96575 0.360122C6.41644 0.175827 5.91345 0.0836792 5.46342 0.0836792C4.76189 0.0836792 4.09345 0.215319 3.46472 0.478597C2.83599 0.735294 2.29992 1.09072 1.84326 1.53829C1.39323 1.97929 1.03584 2.51243 0.771115 3.13113C0.506387 3.74984 0.374023 4.40145 0.374023 5.09256C0.374023 5.78366 0.506387 6.43528 0.771115 7.05398C1.03584 7.67269 1.39323 8.20583 1.84326 8.64682C2.29992 9.08781 2.83599 9.44324 3.46472 9.70652C4.09345 9.96321 4.76189 10.0949 5.46342 10.0949C5.92669 10.0949 6.42967 10.0093 6.97236 9.83157C7.52168 9.65386 7.97171 9.43007 8.3291 9.16021C8.49455 9.04832 8.56735 8.85086 8.48793 8.7258L7.50182 7.23828C7.39593 7.08689 7.15767 7.08031 6.95251 7.21853Z" fill="#414141"/>
                        <path d="M9.72553 9.54197C9.72553 9.75917 9.8579 9.88423 10.0763 9.88423H16.4298C16.6482 9.88423 16.7871 9.75259 16.7871 9.54197V8.12026C16.7871 7.8504 16.6018 7.67269 16.304 7.67269H12.1015V6.03378H15.2914C15.5297 6.03378 15.6753 5.90214 15.6753 5.68493V4.43436C15.6753 4.20399 15.5297 4.07235 15.2914 4.07235H12.1015V2.47952H16.304C16.5357 2.47952 16.6548 2.36104 16.6548 2.13067V0.616819C16.6548 0.399614 16.5224 0.267974 16.304 0.267974H10.0763C9.8579 0.267974 9.72553 0.399614 9.72553 0.616819V9.54197Z" fill="#414141"/>
                        <path d="M24.1731 4.78979C24.7224 4.42778 25.0665 3.74984 25.0665 3.04556C25.0665 2.17016 24.7819 1.48564 24.2194 0.998573C23.6568 0.511507 22.8693 0.267974 21.8501 0.267974H18.3755C18.2034 0.267974 18.1174 0.35354 18.1174 0.518089V9.63411C18.1174 9.79866 18.2034 9.88423 18.3755 9.88423H22.128C23.1936 9.88423 24.0208 9.62753 24.6099 9.12072C25.2055 8.61391 25.5033 7.90306 25.5033 6.98816C25.5033 6.50768 25.3842 6.06669 25.1459 5.66519C24.9077 5.26369 24.5834 4.97408 24.1731 4.78979ZM21.8236 2.40711C22.3464 2.40711 22.6707 2.71647 22.6707 3.2167C22.6707 3.71693 22.3464 4.03286 21.8236 4.03286H20.5198V2.40711H21.8236ZM20.5198 7.74509V5.81657H22.0949C22.7104 5.81657 23.1009 6.17858 23.1009 6.76438C23.1009 7.36334 22.7104 7.74509 22.0949 7.74509H20.5198Z" fill="#414141"/>
                        <path d="M26.6946 9.54197C26.6946 9.75917 26.827 9.88423 27.0454 9.88423H33.3988C33.6172 9.88423 33.7562 9.75259 33.7562 9.54197V8.12026C33.7562 7.8504 33.5709 7.67269 33.2731 7.67269H29.0705V6.03378H32.2605C32.4987 6.03378 32.6443 5.90214 32.6443 5.68493V4.43436C32.6443 4.20399 32.4987 4.07235 32.2605 4.07235H29.0705V2.47952H33.2731C33.5047 2.47952 33.6238 2.36104 33.6238 2.13067V0.616819C33.6238 0.399614 33.4915 0.267974 33.2731 0.267974H27.0454C26.827 0.267974 26.6946 0.399614 26.6946 0.616819V9.54197Z" fill="#414141"/>
                        <path d="M37.1447 0.267974H36.2844H35.4306C35.2254 0.267974 35.0865 0.41936 35.0865 0.623401V9.54197C35.0865 9.75917 35.2122 9.89081 35.4306 9.89081H37.1249C37.3565 9.89081 37.4889 9.75917 37.4889 9.54197V6.92234H38.6471C39.6795 6.92234 40.5134 6.61957 41.1553 6.02061C41.7973 5.41507 42.1216 4.61207 42.1216 3.61161C42.1216 2.59799 41.7973 1.78841 41.1553 1.18287C40.5134 0.570745 39.6795 0.267974 38.6471 0.267974H37.1447ZM37.4889 4.75688V2.43344H38.5478C38.8853 2.43344 39.1699 2.54534 39.3883 2.76912C39.6133 2.98633 39.7258 3.26277 39.7258 3.59845C39.7258 3.93413 39.6133 4.21057 39.3883 4.42778C39.1699 4.64498 38.8853 4.75688 38.5478 4.75688H37.4889Z" fill="#414141"/>
                        <path d="M49.3884 0.267974H46.43C45.3976 0.267974 44.5571 0.570745 43.9151 1.18287C43.2732 1.78841 42.9555 2.59799 42.9555 3.60503C42.9555 4.80953 43.5048 5.80341 44.4512 6.36288L42.757 9.48931C42.6511 9.68019 42.7702 9.89081 42.982 9.89081H44.9608C45.1527 9.89081 45.2388 9.82499 45.3645 9.59462L46.7808 6.88285H47.7669V9.54197C47.7669 9.75917 47.8993 9.89081 48.1309 9.89081H49.8252C50.0436 9.89081 50.1693 9.75917 50.1693 9.54197V0.616819C50.1693 0.412778 50.0303 0.267974 49.8252 0.267974H49.3884ZM46.5293 4.8227C46.1918 4.8227 45.9072 4.70422 45.6822 4.46727C45.4638 4.22374 45.3513 3.93413 45.3513 3.59187C45.3513 3.24961 45.4638 2.97316 45.6822 2.75596C45.9006 2.53875 46.1852 2.42686 46.5293 2.42686H47.7669V4.8227H46.5293Z" fill="#414141"/>
                        <path d="M58.0384 0.267974C57.8729 0.267974 57.7869 0.35354 57.7869 0.524671V3.84856H54.1667V0.524671C54.1667 0.35354 54.0807 0.267974 53.9152 0.267974H52.0489C51.8768 0.267974 51.7908 0.35354 51.7908 0.524671V9.63411C51.7908 9.80525 51.8768 9.89081 52.0489 9.89081H53.9152C54.0807 9.89081 54.1667 9.80525 54.1667 9.63411V6.01403H57.7869V9.63411C57.7869 9.80525 57.8729 9.89081 58.0384 9.89081H59.9113C60.0768 9.89081 60.1628 9.80525 60.1628 9.63411V0.524671C60.1628 0.35354 60.0768 0.267974 59.9113 0.267974H58.0384Z" fill="#414141"/>
                        <path d="M61.3408 5.09914C61.3408 5.78366 61.4732 6.43528 61.7313 7.05398C61.996 7.66611 62.3534 8.19925 62.7968 8.64024C63.2469 9.08123 63.783 9.43666 64.4051 9.69993C65.0272 9.95663 65.6824 10.0883 66.3773 10.0883C67.3038 10.0883 68.151 9.87107 68.9187 9.43007C69.693 8.98908 70.2953 8.38354 70.7387 7.62003C71.1821 6.85652 71.4071 6.01403 71.4071 5.09914C71.4071 4.40803 71.2748 3.75642 71.01 3.13771C70.7519 2.51243 70.3945 1.97929 69.9445 1.53829C69.5011 1.0973 68.965 0.741876 68.3429 0.485179C67.7274 0.221901 67.0722 0.0902612 66.3773 0.0902612C65.6824 0.0902612 65.0272 0.221901 64.4051 0.485179C63.783 0.741876 63.2469 1.0973 62.7968 1.53829C62.3534 1.97929 61.996 2.51243 61.7313 3.13771C61.4732 3.75642 61.3408 4.40803 61.3408 5.09914ZM63.7366 5.09914C63.7366 4.36196 63.9947 3.74325 64.5043 3.23644C65.0139 2.72963 65.6427 2.47293 66.3773 2.47293C67.1119 2.47293 67.734 2.72963 68.2436 3.23644C68.7532 3.74325 69.0113 4.36196 69.0113 5.09914C69.0113 5.82974 68.7532 6.44186 68.2436 6.94867C67.734 7.45548 67.1119 7.7056 66.3773 7.7056C65.6361 7.7056 65.0073 7.45548 64.4977 6.94867C63.9881 6.44186 63.7366 5.82974 63.7366 5.09914Z" fill="#414141"/>
                        <path d="M78.3033 0.261392C78.118 0.261392 77.9658 0.425942 77.9658 0.616819V3.32859C77.9658 3.82224 77.8069 4.21715 77.4959 4.51334C77.1848 4.80953 76.7745 4.96092 76.2516 4.96092C75.2126 4.96092 74.5971 4.34879 74.5971 3.31543V0.616819C74.5971 0.412778 74.4383 0.261392 74.2265 0.261392H72.5256C72.3469 0.261392 72.2013 0.425942 72.2013 0.616819V3.32201C72.2013 4.51993 72.5587 5.48089 73.2735 6.20491C73.9882 6.92234 74.9148 7.28435 76.0531 7.28435C76.7943 7.28435 77.4892 6.98816 77.9658 6.53401V9.54197C77.9658 9.73284 78.1114 9.88423 78.3033 9.88423H80.0174C80.2093 9.88423 80.3615 9.72626 80.3615 9.53539V0.616819C80.3615 0.412778 80.2226 0.261392 80.0373 0.261392H78.3033Z" fill="#414141"/>
                        <path d="M87.7144 4.80295L90.7918 0.72213C90.9507 0.511507 90.8845 0.28772 90.6396 0.28772H88.4622C88.2306 0.28772 88.1048 0.314048 87.9526 0.518089L85.4443 3.86831H84.3788V0.524671C84.3788 0.360122 84.2927 0.274556 84.1273 0.274556H82.2411C82.069 0.274556 81.983 0.360122 81.983 0.524671V9.62753C81.983 9.79866 82.069 9.88423 82.2411 9.88423H84.1273C84.2927 9.88423 84.3788 9.79866 84.3788 9.62753V6.11934H85.7421L88.1776 9.75259C88.2637 9.85132 88.3828 9.90398 88.5218 9.90398H90.719C90.9507 9.90398 91.0102 9.67361 90.8779 9.48273L87.7144 4.80295Z" fill="#414141"/>
                        <path d="M97.1916 0.583909C97.1188 0.393032 96.9401 0.261392 96.7548 0.261392H95.3584C95.1731 0.261392 94.9944 0.379868 94.9083 0.583909L91.3742 9.50247C91.2882 9.73284 91.3875 9.89081 91.6323 9.89081H93.5053C93.7104 9.89081 93.8825 9.75917 93.9355 9.57488L94.3656 8.31772H97.7211L98.1579 9.58146C98.2307 9.76575 98.3961 9.89739 98.5814 9.89739H100.461C100.719 9.89739 100.805 9.72626 100.719 9.50906L97.1916 0.583909ZM96.04 3.41416L97.0394 6.32997H95.0407L96.04 3.41416Z" fill="#414141"/>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Header;