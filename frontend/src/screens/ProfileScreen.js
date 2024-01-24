import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const ProfileScreen = () => {
    return (
        <div className='ml-3 mt-3'>
            <br /><br /><br />
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <div>
                        <h1>My Profile</h1>

                    </div>
                </TabPane>
                <TabPane tab="Bookings" key="2">
                    <div>
                        <h1>My Bokings</h1>

                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default ProfileScreen;
