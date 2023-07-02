import {tblBodyTypes, tblMakes, tblMasterCountry} from ".prisma/client";
import Link from "next/link";
import Image from 'next/image'

interface Props{
    locations : tblMasterCountry[]
    bodyTypes : tblBodyTypes[]
    makes : tblMakes[]
}

function Footer({locations, bodyTypes,makes}:Props){
    const flagLocation = "/assets/images/flags/";


    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 f1">
                            <h5>Headquarters</h5>
                            <p>
                                <Image
                                    src="/assets/images/flags/AE.svg"
                                    className="img-fluid"
                                    alt="AE"
                                    height={25}
                                    width={25}
                                />
                                <br /> RM 405, 4th Floor Al Wahda Building Opp, Day to day Market Near
                                City Center Deira
                                <strong> DUBAI, UAE</strong>
                            </p>
                            <p>
                                <Image
                                    src="/assets/images/flags/JP.svg"
                                    className="img-fluid"
                                    alt="JP"
                                    height={25}
                                    width={25}
                                />
                                <br />
                                7103 Kaburagi Mansion, Nishi Nakanobu, 3-2-17, Shinagawa Ku,
                                <strong> Tokyo 142-0054, Japan </strong>
                            </p>
                            <br />
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li>
                                    <h6>TEL:</h6>
                                    <a href="tel:+49 471 9731 9003">+49 471 9731 9003</a>
                                    <br />
                                    <a href="tel:+971 52 796 7035">+971 52 796 7035</a>
                                </li>
                                <br />
                                <li>
                                    <h6>Corporate Site:</h6>
                                    <a href="https://www.universalmotorsltd.com/" target="">
                                        https://www.universalmotorsltd.com/
                                    </a>
                                </li>
                                <br />
                                <li>
                                    <h6>E-mail: </h6>
                                    <a href="mailto:csd@universalmotorsltd.com">
                                        csd@universalmotorsltd.com
                                    </a>
                                </li>
                                <li className="flex mt-2">
                                    <br />
                                    <h6 className="mr-2">Follow Us:</h6>
                                    <a href="https://www.facebook.com/Universal-Motors-LTD-101574801831062">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-facebook"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com//">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-instagram"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-linkedin"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-12 f1">
                            <h4>By Make</h4>
                            <ul className="countdrop">
                                {
                                    makes
                                        .slice(0, 10) // Get the first 10 records
                                        .map(make=> (
                                            <li key={make.MakeId}>

                                                <Link
                                                    href={{
                                                        pathname : "/global/results",
                                                        query: {
                                                            makeID: make.MakeId
                                                        }
                                                    }}
                                                >
                                                     <span className=" inline-flex items-center rounded-md">
                                                    <Image
                                                        src={make.ImageUrl??""}
                                                        className="flagimg-fluid ml-5"
                                                        alt={make.Slug}
                                                        width={16}
                                                        height={16}
                                                    />
                                                    {make.MakeName}</span>
                                                </Link>
                                            </li>
                                        ))
                                }
                            </ul>
                        </div>
                        <div className="col-md-2 d-md-block d-none f1">
                            <h4>By Type</h4>
                            <ul className="countdrop">
                                {
                                    bodyTypes.map(bodytype=> (
                                        <li key={bodytype.BodyTypeId}>
                                               <span className=" inline-flex items-center rounded-md ml-5">
                                          <Link    href={{
                                              pathname : "/global/results",
                                              query: {
                                                  bodyTypeID: bodytype.BodyTypeId
                                              }
                                          }}>

                                              {bodytype.TypeOfBody}
                                            </Link></span>
                                        </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="col-md-2 d-md-block d-none f1">
                            <h4>By Price</h4>
                            <ul className="countdrop mkl-5">
                                <Link
                                    href={{
                                        pathname : "/global/results",
                                        query: {
                                            price: 5000
                                        }
                                    }}
                                >
                                    <span>Under $5000</span>
                                </Link>
                                <Link
                                    href={{
                                        pathname : "/global/results",
                                        query: {
                                            price: 10000
                                        }
                                    }}
                                >
                                    <span>$5000 - $10,000</span>
                                </Link>
                                <Link
                                    href={{
                                        pathname : "/global/results",
                                        query: {
                                            price: 15000
                                        }
                                    }}
                                >
                                    <span>$10,000 - $15,000</span>
                                </Link>
                                <Link
                                    href={{
                                        pathname : "/global/results",
                                        query: {
                                            price: 25000
                                        }
                                    }}
                                >
                                    <span>$20,000 - $25,000</span>
                                </Link>
                                <Link
                                    href={{
                                        pathname : "/global/results",
                                        query: {
                                            price: 40000
                                        }
                                    }}
                                >
                                    <span>$25,000 - $40,000</span>
                                </Link>

                                <Link
                                    href={{
                                        pathname : "/global/results",
                                        query: {
                                            price: 40001
                                        }
                                    }}
                                >
                                    <span>$40,000 Over</span>
                                </Link>
                            </ul>
                        </div>
                        <div className="col-md-2 d-md-block d-none">
                            <h4>By Location</h4>
                            <ul className="countdrop">
                            {
                                locations
                                    .filter(location=> location.IsInventoryLocation)
                                    .map(location=> (
                                    <li key={location.CountryId}>
                                        <Link href={{
                                            pathname : "/global/results",
                                            query: {
                                                countryID: location.CountryId
                                            }
                                        }}>

                                           <span className=" inline-flex items-center rounded-md">
                                        <Image
                                            src={flagLocation+location.Slug+".svg"}
                                            className="flagimg-fluid ml-5"
                                            alt={location.Slug??""}
                                            width={16}
                                            height={16}
                                        />
                                        {location.CountryName}</span>
                                        </Link>
                                    </li>
                            ))
                            }

                            </ul>
                        </div>
                    </div>
                    <div className="copyright row">
                        <div className="col-md-3 col-3">
                            <Image src="/assets/images/um.svg" alt="logo" className="header-logo"   width={16}
                                   height={16} />
                        </div>
                        <div className="col-md-6 col-9 text-center">
                            <p>
                                Copyright © {new Date().getFullYear()} - All Rights Reserved By Universal
                                Motors.
                            </p>
                        </div>
                        <div className="col-md-3 col-3 d-flex justify-content-end h-7 mt-2">
                            <Image src="/assets/images/visa.png" alt="logo" height={20}  width={50} className="px-1"/>
                            <Image src="/assets/images/mastercard.png" alt="logo" height={20} width={50} />

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;