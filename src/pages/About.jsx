import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv3Cb, useFlex1Cb, useFlex6Cb, useTextBox1Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useTextBox22Cb, useTextBox23Cb } from "../page-cbs/About";
import "../page-css/About.css";
import "../custom/About";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div3Props = useStore((state)=>state["About"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["About"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Flex1Props = useStore((state)=>state["About"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["About"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex6Props = useStore((state)=>state["About"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["About"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const TextBox1Props = useStore((state)=>state["About"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["About"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox19Props = useStore((state)=>state["About"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["About"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["About"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["About"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["About"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["About"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["About"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["About"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["About"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["About"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()

  return (<>
  <Flex className="p-About Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<TextBox1 className="p-About TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox1 className="p-About TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox1 className="p-About TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox1 className="p-About TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox1 className="p-About TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Flex>
<Div1 className="p-About Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Flex className="p-About Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<TextBox1 className="p-About TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Flex>
</Div1>
  </>);
}
