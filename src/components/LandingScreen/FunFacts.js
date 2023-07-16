import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  OrangeText,
  CloseCross
} from "../MasterCss";

import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Apple } from "../../assets/apple-core.svg";
import { ReactComponent as Shirt } from "../../assets/shirt.svg";
import { ReactComponent as Walk } from "../../assets/walk.svg";
import { ReactComponent as DrinksCan } from "../../assets/drinks-can.svg";
import { ReactComponent as PlasticBag } from "../../assets/plastic-bag.svg";
import { ReactComponent as PlasticBottle } from "../../assets/plastic-bottle.svg";
import { ReactComponent as TV } from "../../assets/tv.svg";
import { ReactComponent as Tap } from "../../assets/tap.svg";


const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  display: block;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345C;
  filter: drop-shadow(4px 4px 4px #08345C);
  text-align: center;
`;

const FactList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: right;
  direction: rtl; 

  li {
    line-height: 1.5em;
    text-align: right;

    // padding-bottom: 1em;
  }
`;


const Flexy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const ExtLink = styled.a`
  color: #FF8A00;
`;

const FunFactsModal = ({ handleClose }) => {
  return (
    <FunFactsBox>
        <CloseCross onClick={handleClose} />
        <PageHeader>عن إعادة التدوير</PageHeader>
        <MessageBox primary><BoxMessage>

        <p>جميع الموارد الطبيعية التي نستخدمها والنفايات التي ننتجها تؤذي الكوكب والحيوانات التي تشاركنا المكان</p>

        <p> يمكننا جميعًا تقليل كمية <OrangeText> النفايات التي ننتجها، وإعادة استخدام بعض المواد بدلاً من التخلص </OrangeText> و <OrangeText>إعادة تدوير المواد القابلة للتدوير</OrangeText>، وذلك لمنع دخول النفايات إلى المزابل المقززة أو الوصول إلى المحيط</p></BoxMessage>
        </MessageBox>

       

        <MessageBox primary>
          <BoxMessage>
          <p><OrangeText>لتقليل من النفايات </OrangeText></p>
          
          <FactList>
            <li>حاول المشي أكثر بدلاً من استخدام السيارة</li>
            <li>أغلق الصنبور عند تنظيف أسنانك لتقليل استهلاك المياه</li>
            <li>أطفئ التلفزيون وجهاز الألعاب والأجهزة الكهربائية لتقليل استهلاك الطاقة</li>
          </FactList>

          <Flexy>
            <Walk width="150px"  height="150px"/>
            <Tap width="150px"  height="150px"/>
            <TV width="150px"  height="150px"/>
          </Flexy>
          

          </BoxMessage>
        </MessageBox>

        <MessageBox primary>
          <BoxMessage>
            
          <p><OrangeText>لإعادة الاستخدام</OrangeText></p>

          <FactList>
            <li>اصطحب حقيبة قابلة لإعادة الاستخدام أو حقيبة تسوق قديمة معك عند التوجه إلى المتاجر</li>
            <li>عندما يتعطل شيء ما، راجع إمكانية إصلاحه بدلاً من التخلص منه</li>
            <li>تبرع بالأشياء غير المرغوب فيها للجمعيات الخيرية</li>
            <li>إعادة استخدام الورق - يمكنك دائمًا استخدام الجانبين من ورقة واحدة للرسم عليها</li>
          </FactList>

          <Flexy>
            <PlasticBag width="150px"  height="150px"/>
            <Shirt width="150px"  height="150px"/>
            <Paper width="150px"  height="150px"/>
          </Flexy>

          </BoxMessage>
        </MessageBox>

        <MessageBox primary>
          <BoxMessage>
          
          <p><OrangeText>لإعادة التدوير</OrangeText></p>
          
            <FactList>
              <li>تأكد دائمًا من إمكانية شراء الأشياء المصنوعة من مواد معاد تدويرها</li>
              <li>فرز كل النفايات الخاصة بك بحيث يمكن إعادة تدوير الزجاج وعلب الصفيح والبلاستيك والورق</li>
              <li>استخدم بقايا الطعام لصنع سماد للحديقة</li>
            </FactList>

          <Flexy>
            <PlasticBottle width="150px" height="150px"/>
            <DrinksCan width="150px" height="150px"/>
            <Apple width="150px" height="150px"/>
          </Flexy>

          </BoxMessage>
        </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          
          لمعرفة الجهات المصرحة لإعادة التدوير <ExtLink href='https://mwan.gov.sa/permitted-parties' target="blank">اضغط هنا</ExtLink>

        </BoxMessage>
      </MessageBox>

        <Button primary handleClick={handleClose} label="إغلاق"></Button>

    </FunFactsBox>
  );
};

export default FunFactsModal;
