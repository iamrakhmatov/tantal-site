import "./Breadcrumb.css";
import { Breadcrumb } from "antd";
import { MailFilled, PhoneFilled, NodeIndexOutlined } from "@ant-design/icons";

const BreadCrumb = () => {
  return (
    <Breadcrumb className="flex justify-end pt-2 sm:px-6 lg:px-16">
      <Breadcrumb.Item className="mx-4  flex items-center">
        <MailFilled
          className="px-3"
          style={{ fontSize: "20px", color: "rgb(153, 27, 27)" }}
        />
        <span className="ml-1">tantanvehicles@gmail.com</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="mr-4 flex items-center">
        <NodeIndexOutlined
          className="px-3"
          style={{ fontSize: "20px", color: "rgb(153, 27, 27)" }}
        />
        <span>Малая Кольцевая 17, Ташкент</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="mr-4 flex items-center">
        <PhoneFilled
          className="px-3"
          style={{ fontSize: "20px", color: "rgb(153, 27, 27)" }}
        />
        <span className="ml-1 border border-red-800 bg-red-800 rounded-full px-5 text-white">
          +998 71 277 7777
        </span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
