import React, { ReactElement, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface OnlyOneTabProps {
  children: ReactElement;
  massage?: string | JSX.Element;
}

const OnlyOneTab: React.FunctionComponent<OnlyOneTabProps> = ({
  children,
  massage,
}) => {
  const localStorageKey = localStorage.getItem('tab');
  const [isCurrentTab, setisCurrentTab] = useState(true);
  const id = uuidv4();

  useEffect(() => {
    localStorage.setItem('tab', id);
  }, []);

  window.addEventListener('storage', () => {
    if (localStorageKey === id) {
      setisCurrentTab(true);
    } else {
      setisCurrentTab(false);
    }
  });

  return (
    <>
      {isCurrentTab ? (
        children
      ) : (
        <>{massage ? massage : <>Only One Tab Allowed</>}</>
      )}
    </>
  );
};

export default OnlyOneTab;
