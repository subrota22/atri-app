import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex2Cb, useFlex5Cb, useInput5Cb, useInput6Cb, useInput7Cb, useInput8Cb, useTextBox2Cb, useTextBox14Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb } from "../page-cbs/Contact";
import "../page-css/Contact.css";
import "../custom/Contact";

export default function Contact() {
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

  const Flex2Props = useStore((state)=>state["Contact"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Contact"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex5Props = useStore((state)=>state["Contact"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Contact"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Input5Props = useStore((state)=>state["Contact"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["Contact"]["Input5"]);
const Input5Cb = useInput5Cb()
const Input6Props = useStore((state)=>state["Contact"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Contact"]["Input6"]);
const Input6Cb = useInput6Cb()
const Input7Props = useStore((state)=>state["Contact"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["Contact"]["Input7"]);
const Input7Cb = useInput7Cb()
const Input8Props = useStore((state)=>state["Contact"]["Input8"]);
const Input8IoProps = useIoStore((state)=>state["Contact"]["Input8"]);
const Input8Cb = useInput8Cb()
const TextBox2Props = useStore((state)=>state["Contact"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Contact"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox14Props = useStore((state)=>state["Contact"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Contact"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Contact"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Contact"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Contact"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Contact"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Contact"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Contact"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Contact"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Contact"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()

  return (<>
  <Flex1 className="p-Contact Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<TextBox2 className="p-Contact TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<TextBox2 className="p-Contact TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox2 className="p-Contact TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox2 className="p-Contact TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox2 className="p-Contact TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex1>
<Flex1 className="p-Contact Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox2 className="p-Contact TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<Input className="p-Contact Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
<Input className="p-Contact Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
<Input className="p-Contact Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
<Input className="p-Contact Input8 bpt" {...Input8Props} {...Input8Cb} {...Input8IoProps}/>
</Flex1>
  </>);
}
