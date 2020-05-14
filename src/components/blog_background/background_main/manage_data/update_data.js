import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import axios from '../../../../axios_config/axios_config';
import UploadImage from './upload_image';
import DataTitle from './data_titile';
import DataCategory from './data_category';
import MdEditor from './md_editor';
import DataButton from './data_button';

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

function UpdateData() {
  const { id } = useParams();
  const history = useHistory();
  const [dataList, setDataList] = useState({
    dataId: '',
    dataImage: '',
    dataTitle: '',
    dataCategory: 0,
    dataContext: '',
    createtime: ''
  });
  const handleGetDetailData = async () => {
    const result = await axios.get('/getdetailarticle', {
      params: {
        id
      }
    });
    const { _id, imgurl, title, category, context } = result.data.data.res;
    setDataList({
      ...dataList,
      dataId: _id,
      dataImage: imgurl,
      dataTitle: title,
      dataCategory: category,
      dataContext: context
    });
  };
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    if (file) {
      const result = await axios.post('/upload',
        formData
      );
      setDataList({ ...dataList, dataImage: result.data.data.res.url });
    }
  };
  const handleEditChange = it => {
    setDataList({ ...dataList, dataContext: it.text });
  };
  const handleContextUpload = async (e, callback) => {
    const formData = new FormData();
    formData.append('file', e);
    const result = await axios.post('/upload', formData);
    const { url } = result.data.data.res;
    callback(url);
  };
  const handleChangeData = prop => event => {
    setDataList({ ...dataList, [prop]: event.target.value });
  };
  const handleSubmit = async () => {
    let apiUrl = '/insertarticle';
    id !== 'null' && (function changeApi() {
      apiUrl = '/editarticle';
    }());
    const result = await axios.post(apiUrl, {
      id: dataList.dataId,
      imageUrl: dataList.dataImage,
      title: dataList.dataTitle,
      category: dataList.dataCategory,
      context: dataList.dataContext,
      createtime: new Date()
    });
    result && history.push('/background/managedata');
  };
  useEffect(() => {
    id !== 'null' && handleGetDetailData();
  }, []);
  return (
    <Form>
      <UploadImage handleChange={handleUpload} />
      <DataTitle
        value={dataList.dataTitle}
        handleChange={handleChangeData('dataTitle')}
      />
      <DataCategory
        value={dataList.dataCategory}
        handleChange={handleChangeData('dataCategory')}
      />
      <MdEditor
        value={dataList.dataContext}
        handleChange={handleEditChange}
        handleUploadImage={handleContextUpload}
      />
      <DataButton handleClick={handleSubmit} />
    </Form>
  );
}

export default UpdateData;
