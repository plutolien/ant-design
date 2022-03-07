import React, {useState} from "react";
import "antd/dist/antd.css";
import {DatePicker, Select, Input, Button, Tooltip, AutoComplete} from "antd";
import {AimOutlined, UserOutlined} from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import ComponentWrapper from "./components/ComponentWrapper";
import {RadarChartOutlined, ZoomInOutlined} from "@ant-design/icons/lib";

const mockVal = (str: string, repeat: number = 1) => ({
    value: str.repeat(repeat),
});

function App() {
    const [number, setNumber] = useState('');

    const [result, setResult] = useState<string[]>([]);
    const handleSearch = (value: string) => {
        let res: string[] = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        setResult(res);
    };

    const { Option } = AutoComplete;

    return (
        <>
            <ComponentWrapper height={50}>
                <DatePicker/>
            </ComponentWrapper>

            <ComponentWrapper type={"select"} height={30}>
                <Select defaultValue="lucy" style={{width: "100%"}} aria-current={true}>
                    <Select.Option value="jack"><AimOutlined /> Jack</Select.Option>
                    <Select.Option value="lucy"><ZoomInOutlined /> Lucy</Select.Option>
                    <Select.Option value="Yiminghe"><RadarChartOutlined /> yiminghe</Select.Option>
                </Select>
            </ComponentWrapper>

            <ComponentWrapper type={"select"} height={50}>
                <Select defaultValue="lucy" style={{width: "100%"}} aria-current={true}>
                    <Select.Option value="mango"><AimOutlined /> Mango</Select.Option>
                    <Select.Option value="banana"><ZoomInOutlined /> Banana</Select.Option>
                    <Select.Option value="orange"><RadarChartOutlined /> Orange</Select.Option>
                </Select>
            </ComponentWrapper>

            <ComponentWrapper type={"select"} height={70}>
                <Select defaultValue="lucy" style={{width: "100%"}} aria-current={true}>
                    <Select.Option value="mango"><AimOutlined /> Mango</Select.Option>
                    <Select.Option value="banana"><ZoomInOutlined /> Banana</Select.Option>
                    <Select.Option value="orange"><RadarChartOutlined /> Orange</Select.Option>
                </Select>
            </ComponentWrapper>

            <ComponentWrapper height={50}>
                <Input placeholder={"Enter your text"}/>
            </ComponentWrapper>

            <ComponentWrapper height={50}>
                <Input placeholder="large size" prefix={<UserOutlined/>}/>
            </ComponentWrapper>

            <ComponentWrapper height={50}>
                <Input placeholder={"Enter Number"} value={number} onChange={(e) => {
                    if (isNaN(Number(e.target.value))) {
                        return false;
                    }
                    setNumber(e.target.value);
                }}/>
            </ComponentWrapper>

            <ComponentWrapper height={50}>
                <Button type="primary">Primary Button</Button>
            </ComponentWrapper>

            <ComponentWrapper height={50}>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
            </ComponentWrapper>

            <ComponentWrapper height={50}>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
            </ComponentWrapper>

            {/*<ComponentWrapper type={"select"} height={20}>
                <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="input here">
                    {result.map((email: string) => (
                        <Option className={"TEST"} key={email} value={email}>
                            {email} Test Email
                        </Option>
                    ))}
                </AutoComplete>
            </ComponentWrapper>*/}
        </>
    );
}

export default App;
