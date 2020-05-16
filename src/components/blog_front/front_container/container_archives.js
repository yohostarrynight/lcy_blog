import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import axios from '../../../axios_config/axios_config';

function ContainerArchives() {
  const history = useHistory();
  const [timeList, setTimeList] = useState([]);
  const handleGetArticle = async () => {
    const result = await axios.get('/getarticleinfo', {
      params: {
        offset: 0,
        limit: 999,
        categories: 999
      }
    });
    setTimeList(result.data.data.res);
  };
  const handlePushArticle = id => () => {
    history.push('/index/article/' + id);
  };
  useEffect(() => {
    handleGetArticle();
  }, []);
  return (
    <div>
      <Timeline
        lineStyle={{
          background: '#e8e8e8',
          border: '1px solid #e8e8e8'
        }}
      >
        {
          timeList.map((timeItem) => {
            return (
              <TimelineEvent
                key={timeItem._id}
                title={timeItem.title}
                onClick={handlePushArticle(timeItem._id)}
                style={{
                  margin: '20px'
                }}
                bubbleStyle={{
                  width: '10px',
                  height: '10px',
                  top: '3.5px',
                  left: '10.5px',
                  background: '#1890ff',
                  border: '2px solid #1890ff'
                }}
                titleStyle={{
                  fontSize: '18px',
                  color: '#1890ff'
                }}
              />
            );
          })
        }
      </Timeline>
    </div>
  );
}

export default ContainerArchives;
