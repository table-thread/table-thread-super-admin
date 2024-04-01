import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import { ICMdEdit, ICBsTrash3Fill } from '@/utils/icons';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';
import AddCategories from '@/containers/modal/product_categories/AddCategories';
import EditCategories from '@/containers/modal/product_categories/EditCategories';
import DeleteCategories from '@/containers/modal/product_categories/DeleteCategories';
import ToastComponent from '@/component/Toast/Toast';

import NetworkOps from '@/ApiHandler/NetworkOps';
import endPoints from '@/ApiHandler/AppConfig';

import { removeDateRest } from '@/utils/helper';

const TAG = "Product Categories: ";

const ProductCategories = () => {

  const [isModalOpen, setAddModalOpen] = useState(null);
  const [editOpen, setEditOpen] = useState<any>(null);
  const [resturenst, setResturenst] = useState<any>(null);
  const [deleteOpen, setDeleteOpen] = useState<any>(null);

  const [product, setProduct] = useState<any>([
    {
      name: 'Starter',
      date: '2024-08-01',
      items: 10
    },
    {
      name: 'fast-food',
      date: '2023-01-24',
      items: 15
    },
    {
      name: 'desert',
      date: '2020-05-22',
      items: 4
    },
    {
      name: 'lunch',
      date: '2023-05-18',
      items: 14
    }
  ]);

  useEffect(() => {
    const ResturenstData: any = localStorage.getItem("ResturenstData");
    const parseResturenstData = JSON.parse(ResturenstData)
    console.log(TAG, " admin deta from localstorege", parseResturenstData);
    // setResturenst(parseResturenstData[0]._id)
    // getAllCategorys(parseResturenstData[0]._id)
  }, [])

  async function getAllCategorys(id: any): Promise<void> {
    // console.log("id", id);

    NetworkOps.makeGetRequest(`${endPoints.getCategorys}?restaurant_id=${id}`, true)
      .then(async (response: any) => {
        console.log(TAG, ' addAllCategory response ', response);
        if (response?.status == 200 && response?.data?.success == true) {
          ToastComponent(response?.data?.message);
          console.log("this is addAllCategory data ", response?.data?.data)
          setProduct(response?.data?.data)

        } else if (response?.status == 200 && response?.data?.success == false) {
          ToastComponent(response?.data?.message);

        } else {
          // setLoading(false);
          ToastComponent(response?.data?.message);
          console.log(TAG, ' error got in else ');
        }
      })
      .catch((error: any) => {
        // setLoading(false);
        error?.data?.detail ? ToastComponent(error?.data?.detail) : null;
        console.log(TAG, ' error i got in catch ', error);
      });

  }


  return (
    <HomeLayout getCategorys={getAllCategorys}>
      <div className='col-12'>
        <Card className='mb-4 ps-3 box-shadow'>

          <div className='d-flex justify-content-between align items-center mb-5'>
            <div className='fw-bold fs-4' >Products Categories</div>
            <Button onClick={() => setAddModalOpen(resturenst)}>Add New Product</Button>
          </div>

          <div className='row border-bottom pb-3'>
            <div className='col-lg-2 col-md-2 col-2 fw-bold'>Sr. No</div>
            <div className='col-2 fw-bold'>Name</div>
            <div className='col-2 fw-bold'>Created Date</div>
            <div className='col-2 fw-bold'>Items</div>
            <div className='col-2 fw-bold'>View</div>
          </div>

          {product.map((item: any, index: any) => {
            return (
              <div className='row border-bottom align-items-center' key={index}>
                <div className='col-2 my-3 fw-bolder'>
                  {index + 1}
                </div>
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>{item.createdAt ? removeDateRest(item.createdAt) : ""}</div>
                <div className='col-2'>{item.items ? item.items : '13'}</div>
                <div className='col-4 d-flex gap-3'>
                  <div className='table-icons ' >
                    <div onClick={() => setEditOpen(item)}><ICMdEdit /></div>
                  </div>
                  <div className='table-icons mx-3'>
                    <div onClick={() => setDeleteOpen(index)}><ICBsTrash3Fill /></div>
                  </div>
                </div>
              </div>
            )
          })}
        </Card>
      </div>
      <>
        {isModalOpen !== null ?
          <AddCategories
            openModal={isModalOpen}
            setOpenModal={setAddModalOpen}
            addCategorie={setProduct}
          />
          :
          ""
        }

        {editOpen !== null ?
          <EditCategories
            openEditModal={editOpen}
            setOpenEditModal={setEditOpen}
            setProduct={setProduct}
            getUpdatedCategorys={getAllCategorys}
          />
          :
          ""
        }

        {deleteOpen !== null ?
          <DeleteCategories
            openDeleteModal={deleteOpen}
            setDeleteOpenModal={setDeleteOpen}
            product={product}
            setProduct={setProduct}
          />
          :
          ""
        }
      </>
    </HomeLayout>
  )
}

export default ProductCategories;
