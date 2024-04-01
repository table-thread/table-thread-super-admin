import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import CustomTooltip from '@/component/tooltip/tooltip';
import IconBox from "@/component/iconbox/iconbox";

import { logo776x120, dashboard, account, arrow, income_tax, gst, tds, arrowh, icegate, alert, tally, mis, wallet, profile, users, settings, subscription, services, about, refer } from '@/utils/image';

import { ICAiOutlineSetting, ICAiOutlineCalendar, ICFaRegUser, ICBsChatText, ICBsPeople } from "@/utils/icons";


const TAG = "Navigation: ";
const Navigation = (props: any) => {

  const router = useRouter();
  const { sidebarStatus, setSide } = props;

  const [childMenu, setChildMenu] = useState<string>("none");
  const [selectMenu, setSelectMenu] = useState<string>("null");


  useEffect(() => {
    const { pathname } = router;
    if (pathname) {
      setSelectMenu(pathname);
      // console.log(TAG + "this is select menu", pathname);
      // window.history.replaceState({}, '', newUrl)
    }
  }, [0]);

  function expandAndRotate(target: string) {
    setSelectMenu(target);
    if (target === childMenu) {
      setChildMenu("none");
    } else {
      setChildMenu(target);
    }
  }

  function closeSidebar() {
    setSide("none");
  }

  const directToTarget = (target: string) => {
    // console.log(TAG + " Creds ", target);
    setSelectMenu(target);
    router.push(target);
  }

  return (
    <>
      <div className={`navSection ${sidebarStatus === "open" ? " active " : " none "} `}>
        <nav className="navSelf">
          <ul className="p-0" >

            <li className="logoSec">
              <Image src={logo776x120} alt="accountNtax logo" width={776} height={120} />
            </li>

            {/* <li className="active"> */}
            <li onClick={() => directToTarget("/home")} className={`cp ${selectMenu === 'null' ? 'active' : (selectMenu === '/home' ? 'active' : "")}`} >
              <div className="navItem active">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={dashboard} alt="dashboard icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Dashboard" >Dashboard</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>

            <li className={selectMenu === 'account' ? 'active' : ""}>
              {/* || '/sales' || '/purchase-expense' || '/cash-and-banks'|| 'journal' */}

              <div className="navItem" onClick={expandAndRotate.bind('', "account")} >

                <div className="navLeft"  >
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={account} alt="account icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Accounting" >Accounting </CustomTooltip>
                  </div>
                </div>

                {/* <div className="navRight" onClick={expandAndRotate.bind('', "account")}  > */}
                <div className="navRight" >
                  <Image
                    src={arrow}
                    alt="arrow icon"
                    width={24}
                    height={24}
                    className={childMenu == "account" ? "active" : "none"}
                  />
                </div>

              </div>

              <div className={`navSubMen ${childMenu !== "account" ? "none" : ""} `} >
                <ul>
                  <li onClick={() => directToTarget("/sales")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Invoicing / Sales" placement="right" >Invoicing / Sales</CustomTooltip>
                  </li>
                  <li onClick={() => directToTarget("/purchase-expense")}>
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Purchase / Expenses" placement="right"  >Purchase / Expenses </CustomTooltip>
                  </li>
                  <li onClick={() => directToTarget("/cash-and-banks")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Cash & Bank" placement="right"  >Cash & Bank </CustomTooltip>
                  </li>
                  <li onClick={() => directToTarget("/journal")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Journal" placement="right"  >Journal </CustomTooltip>
                  </li>
                </ul>
              </div>

            </li>

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image
                        src={income_tax}
                        alt="account icon"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Income Tax" >Income Tax </CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image
                        src={gst}
                        alt="gst icon"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="GST" >GST</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={tds} alt="tds icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="TDS" >TDS</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={icegate} alt="icegate icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Icegate" >Icegate</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={alert} alt="alert icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Alert" >Alert</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={tally} alt="tally icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Tally" >Tally</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}
            {/* 
            <li onClick={() => directToTarget("mis")} className='cp' > */}

            {/* <li onClick={() => directToTarget("mis")} className='cp' >
              <div className="navItem">

                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={mis} alt="mis icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="MIS" >MIS</CustomTooltip>
                  </div>
                </div>

                <div className="navRight" onClick={expandAndRotate.bind('', "mis")}  >
                  <Image
                    src={arrow}
                    alt="arrow icon"
                    width={24}
                    height={24}
                    className={childMenu == "mis" ? "active" : "none"}
                  />
                </div>
              </div>

              <div className={`navSubMen ${childMenu !== "mis" ? "none" : ""} `} >
                <ul>
                  <li onClick={() => directToTarget("mis")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Cash & Bank" placement="right" >Sales</CustomTooltip>
                  </li>
                  <li onClick={() => directToTarget("cash-bank-details")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Cash & Bank" placement="right" >Cash & Bank</CustomTooltip>
                  </li>
                  <li onClick={() => directToTarget("gst-monthly")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="GST" placement="right" >GST</CustomTooltip>
                  </li>
                </ul>
              </div>
            </li> */}



            {/* <li onClick={() => directToTarget("expenses")} className='cp' >
              <div className="navItem">
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={services} alt="services icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Expenses" >Expenses</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            <li className={selectMenu === 'mis' ? 'active' : ""}>

              <div className="navItem" onClick={expandAndRotate.bind('', "mis")}  >
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={mis} alt="mis icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="MIS" >MIS</CustomTooltip>
                  </div>
                </div>

                {/* <div className="navRight cp" onClick={expandAndRotate.bind('', "mis")}  > */}
                <div className="navRight cp" >
                  <Image
                    src={arrow}
                    alt="arrow icon"
                    width={24}
                    height={24}
                    className={childMenu == "mis" ? "active" : "none"}
                  />
                </div>
              </div>



              <div className={`navSubMen ${childMenu !== "mis" ? "none" : ""} `} >
                <ul>
                  <li onClick={() => directToTarget("/expenses")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Expenses" placement="right" >Expenses</CustomTooltip>
                  </li>
                  <li onClick={() => directToTarget("/mis")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Sales" placement="right"  >Sales</CustomTooltip>
                  </li>

                  <li onClick={() => directToTarget("/mis-cash-bank")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Sales" placement="right"  >Cash & Banks</CustomTooltip>
                  </li>
                </ul>
              </div>

            </li>


            {/* <li>
              <div className="navItem">
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={services} alt="services icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Company-Profile-Details" >Profile</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>


            {/* <li>

              <div className="navItem">

                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={account} alt="account icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Profile" >Profile </CustomTooltip>
                  </div>
                </div>

                <div className="navRight" onClick={expandAndRotate.bind('', "profile")}  >
                  <Image
                    src={arrow}
                    alt="arrow icon"
                    width={24}
                    height={24}
                    className={childMenu == "profile" ? "active" : "none"}
                  />
                </div>

              </div>

              <div className={`navSubMen ${childMenu !== "profile" ? "none" : ""} `} >
                <ul>
                  <li onClick={() => directToTarget("profile-details")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Company Profile Details" placement="right" >Company Profile Details</CustomTooltip>
                  </li>
                  <li onClick={() => directToTarget("add-company-profile")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip title="Add Company" placement="right"  >Add Company </CustomTooltip>
                  </li>
                  <li onClick={() => directToTarget("update-company-profile")} >
                    <Image src={arrowh} alt="arrow icon" width={8} height={10} />
                    <CustomTooltip
                      title="Update Company Profile"
                      placement="right"
                    >Update Company Profile </CustomTooltip>
                  </li>
                </ul>
              </div>

            </li> */}


            {/* <li onClick={() => directToTarget("users")} className='cp' >
              <div className="navItem">
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={mis} alt="users icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Users" >Users</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            <li onClick={() => directToTarget("/due-date")} className={`cp ${selectMenu === '/due-date' ? 'active' : ""}`} >
              <div className="navItem">
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <span className='fs-20'>
                        <ICAiOutlineCalendar />
                      </span>
                      {/* <Image src={mis} alt="users icon" width={24} height={24} /> */}
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Due Date" >Due Date</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>

            <li onClick={() => directToTarget("/meetings")} className={`cp ${selectMenu === '/meetings' ? 'active' : ""}`} >
              <div className="navItem">
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <span className='fs-20'>
                        <ICBsPeople />
                      </span>
                      {/* <Image src={mis} alt="users icon" width={24} height={24} /> */}
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Meetings" >Meetings</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>

            <li onClick={() => directToTarget("/profile-details")} className={`cp ${selectMenu === '/profile-details' ? 'active' : ""}`} >
              <div className="navItem">
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <span className='fs-20'>
                        <ICFaRegUser />
                      </span>
                      {/* <Image src={mis} alt="users icon" width={24} height={24} /> */}
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Company Profile" >Profile</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>

            <li onClick={() => directToTarget("/raise-query")} className={`cp ${selectMenu === '/raise-query' ? 'active' : ""}`}>
              <div className="navItem">
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <span className='fs-20'>
                        <ICBsChatText />
                      </span>
                      {/* <AiOutlineMessage color="#673275" /> */}
                      {/* <Image src={mis} alt="users icon" width={24} height={24} /> */}
                      {/* <IconBox
                        type="text"
                        icon={<AiOutlineMessage color="#673275" />}
                        color="#EA7A3A"
                        loading={false}
                      /> */}
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Query" >Query</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>

            <li onClick={() => directToTarget("/configuration")} className={`cp ${selectMenu === '/configuration' ? 'active' : ""}`}>
              <div className="navItem">
                <div className="navLeft" >
                  <div className="navImg">
                    <div className="iconBox" >
                      <span className='fs-20'>
                        <ICAiOutlineSetting />
                      </span>
                      {/* <Image src={mis} alt="users icon" width={24} height={24} /> */}
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Configuration" >Configuration</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={users} alt="users icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Users" >Users</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={settings} alt="settings icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Settings" >Settings</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={subscription} alt="subscription icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Subscription" >Subscription</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={services} alt="services icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Services" >Services</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={about} alt="about us icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="About" >About</CustomTooltip>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="navItem">
                <div className="navLeft">
                  <div className="navImg">
                    <div className="iconBox" >
                      <Image src={refer} alt="refer us icon" width={24} height={24} />
                    </div>
                  </div>
                  <div className="navTlt">
                    <CustomTooltip title="Refer Us" >Refer Us</CustomTooltip>
                  </div>
                </div>
              </div>
            </li> */}

          </ul>
        </nav >
      </div >

      <div className={`overlay-c-box ${sidebarStatus === "open" ? " active " : " none "} `} onClick={closeSidebar} > </div>
    </>

  );
}

export default Navigation;