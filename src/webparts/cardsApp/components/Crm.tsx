import * as React from "react";
import styles from "./Crm.module.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";
import { addData, getMail } from "../service/spservice"; //getMail
import { ICardsAppProps } from "./ICardsAppProps";
import { Form, Input, Button, Modal } from "antd";
import { Approvalmail } from "../RequestMail/mailTrigger";

const Crm = (props: ICardsAppProps) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    try {
      await addData(values);
      setIsModalVisible(true);

      let data = await getMail();

      let senderMail = data[0].mail_id;

      await Approvalmail(values, senderMail); // Pass sender's email and form values
      console.log("Email sent to", senderMail);

      form.resetFields();
      console.log("Data submitted to SharePoint list");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const popover = (
    <Popover className={styles.popoverBox}>
      <Popover.Header className={styles.popHeading}>CRM Request</Popover.Header>
      <Popover.Body>
        <Form
          form={form}
          onFinish={onFinish}
          className={styles.form}
          layout="vertical"
        >
          {/* Ant Design Form Fields */}
          <Form.Item
            name="customer"
            label="Customer"
            rules={[{ required: true, message: "Please enter customer name" }]}
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>
          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: "Please enter case subject" }]}
          >
            <Input placeholder="Enter case subject" />
          </Form.Item>
          <Form.Item
            name="product"
            label="Product"
            rules={[{ required: true, message: "Please enter product name" }]}
          >
            <Input placeholder="Enter product name" />
          </Form.Item>
          <Form.Item
            name="supportType"
            label="Support Type"
            rules={[{ required: true, message: "Please enter support type" }]}
          >
            <Input placeholder="Enter support type" />
          </Form.Item>
          <Form.Item
            name="contact"
            label="Contact"
            rules={[{ required: true, message: "Please enter contact" }]}
          >
            <Input type="number" placeholder="Enter contact" />
          </Form.Item>
          <Form.Item>
            <div>
              {/*//className={styles.popRow} */}
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submitBtn}
              >
                Submit
              </Button>
              <Modal
                title="Successfully submitted!.."
                visible={isModalVisible}
                onCancel={handleModalOk}
                footer={[
                  <Button key="submit" type="primary" onClick={handleModalOk}>
                    OK
                  </Button>,
                ]}
              >
                <p>Your request is submitted.</p>
              </Modal>
            </div>
          </Form.Item>
        </Form>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className={styles.card}>
        <div className={styles.column1}>
          <div>
            <img src={require("../assets/crm.svg")} alt="CRM logo" />
          </div>
          <div>
            <p className={styles.heading}>CRM Ticket</p>
            <p className={styles.text} placeholder="">
              Request your CRM ticket
            </p>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={popover}
              rootClose={true}
            >
              <button type="button" className={styles.btn}>
                Request
              </button>
            </OverlayTrigger>
          </div>
        </div>
        <div className={styles.column2}>
          <img
            src={require("../assets/businessPlan.svg")}
            alt="Business plan and corporate strategy"
          />
        </div>
      </div>
    </>
  );
};

export default Crm;
