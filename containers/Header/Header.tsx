import React, { useEffect, useState } from 'react';
import { Layout, Button, Dropdown, Menu, Space } from 'antd';

import { ICMenuFoldOutlined, ICMenuUnfoldOutlined, ICGithubOutlined, ICDownOutlined, ICZoomInOutlined, ICTeamOutlined, ICBellOutlined, ICUnorderedListOutlined, } from '@/utils/icons'

const { Header } = Layout;

const TAG = "Header: ";
const Navhead = (props: any) => {

  const { hideSideBar, showSideBar, collapsOnSD, setCollapsOnSD, getCategorys } = props;

  const [resturens, SetResturenstData] = useState<[]>([]);

  const style = {
    fontSize: '18px',
    borderRadius: "50px",
    width: 54,
    height: 54,
  }

  useEffect(() => {
    const ResturenstData: any = localStorage.getItem("ResturenstData");
    const parseResturenstData = JSON.parse(ResturenstData)
    console.log(TAG, " admin deta from localstorege", parseResturenstData);
    SetResturenstData(parseResturenstData)
    // setSestorentrestaurant(parseAdminData.loginData._id)
  }, [])

  return (
    <>
      <Header className='d-flex align-items-center justify-content-between bg-white px-4 position-fixed' style={{ width: '-webkit-fill-available', zIndex: 1 }}>
        <div className='d-flex align-items-center justify-content-between'>
          <Button
            type="text"
            icon={<ICMenuFoldOutlined />}
            onClick={() => props.hideSideBar(!showSideBar)}
            style={style}
            className='lg-sidebar-button'
          />
          <Button
            type="text"
            icon={<ICUnorderedListOutlined />}
            onClick={() => {
              setCollapsOnSD(!collapsOnSD);
              hideSideBar(false)
            }}
            style={style}
            className='sm-sidebar-button'
          />
          <Button type="text" className='lg-sidebar-button' icon={<ICZoomInOutlined />} style={style} />

          <Dropdown
            overlay={<Menu>
              {resturens?.map((res: any) => {
                return (
                  <Menu.Item key={res?._id}>
                    <div>
                      {res.name}
                    </div>
                  </Menu.Item>
                )
              })}
            </Menu>}
            placement="bottom"
            trigger={['click']}
          >
            {resturens && resturens.length !== 0 ? (
              <Button type="text">{resturens[0]?.name} <ICDownOutlined /></Button>
            ) : (
              <Button type="text">select resturent <ICDownOutlined /></Button>
            )}
          </Dropdown>
        </div >
        <div>
          <Button type="text" className='lg-sidebar-button' icon={<ICGithubOutlined />} style={style} />
          <Button type="text" icon={<ICZoomInOutlined />} style={style} />
          <Button type="text" icon={<ICBellOutlined />} style={style} />
          <Button type="text" className='lg-sidebar-button' icon={<ICTeamOutlined />} style={style} />
        </div>
      </Header >

    </>
  );
}

export default Navhead;