import React from 'react';
import Devider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

export default function MyTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
        <Tab label="Tab1" />
        <Tab label="Tab2" />
        <Tab label="Tab3" />
      </Tabs>
      <Devider />
    </>
  );
}
