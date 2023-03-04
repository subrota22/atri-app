import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv4Cb, useFlex7Cb, useTextBox24Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb } from "../page-cbs/Service";
import "../page-css/Service.css";
import "../custom/Service";

export default function Service() {
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

  const Div4Props = useStore((state)=>state["Service"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["Service"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Flex7Props = useStore((state)=>state["Service"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Service"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const TextBox24Props = useStore((state)=>state["Service"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Service"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Service"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Service"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Service"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Service"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Service"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Service"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Service"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Service"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Service"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Service"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()

  return (<>
  <Flex2 className="p-Service Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox3 className="p-Service TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox3 className="p-Service TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox3 className="p-Service TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox3 className="p-Service TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox3 className="p-Service TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex2>
<Div2 className="p-Service Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<TextBox3 className="p-Service TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Div2>
  </>);
}
