import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

import "antd/dist/antd.css";
import { Spin, Space } from "antd";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
	return (
		<div className="App">
			<Header />

			<div className="text-center">
				<Space size="middle">
					<Spin size="small" />
					<Spin />
					<Spin size="large" />
					<Spin />
					<Spin size="small" />
				</Space>
			</div>

			<Footer />
		</div>
	);
}

export default App;
