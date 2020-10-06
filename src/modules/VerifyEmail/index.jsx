import React from 'react';
import { Button, Result, Spin } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

import { Block } from 'components';
import { userApi } from 'utils/api';

const renderTextInfo = ({ hash, status, message }) => {
  if (hash && status && message) {
    const title = status === 'error' ? 'Ошибка!' : 'Готово!';
    return {
      status: status,
      title: title,
      message: message,
    };
  } else {
    return {
      status: 'info',
      title: 'Подтвердите почту',
      message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
    };
  }
};

const CheckEmailInfo = () => {
  const location = useLocation();
  const history = useHistory();
  const hash = React.useRef(location.search.split('hash=')[1]);
  const [checking, setChecking] = React.useState(!!hash.current);
  const [info, setInfo] = React.useState(renderTextInfo({ hash: hash.current, status: null, message: null }));

  React.useEffect(() => {
    if (hash.current) {
      userApi
        .verify(hash.current)
        .then(({ data: { status, message } }) => {
          setInfo(renderTextInfo({ hash: hash.current, status, message }));
          setChecking(false);
        })
        .catch(({ response: { data: { status, message } } }) => {
          setInfo(renderTextInfo({ hash: hash.current, status, message }));
          setChecking(false);
        });
    }
  }, []);

  const handleClick = () => {
    history.push('/signin')
  }

  return (
    <>
      <Block>
        {!checking ? (
          <Result
            status={info.status}
            title={info.title}
            subTitle={info.message}
            extra={
              info.status === 'success' && (
                <Button type="primary" onClick={handleClick}>
                  Войти
                </Button>
              )
            }
          />
        ) : (
            <>
              <Spin size="large" />
            </>
          )}
      </Block>
    </>
  );
};

export default CheckEmailInfo;
