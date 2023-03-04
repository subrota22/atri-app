import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDiv4Cb() {
	const onClick = useCallback(callbackFactory("Div4", "Service", "/Service", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox24Cb() {
	const onClick = useCallback(callbackFactory("TextBox24", "Service", "/Service", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox25Cb() {
	const onClick = useCallback(callbackFactory("TextBox25", "Service", "/Service", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox26Cb() {
	const onClick = useCallback(callbackFactory("TextBox26", "Service", "/Service", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/Service.jsx"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox27Cb() {
	const onClick = useCallback(callbackFactory("TextBox27", "Service", "/Service", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/Contact"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox28Cb() {
	const onClick = useCallback(callbackFactory("TextBox28", "Service", "/Service", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/About"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox29Cb() {
	const onClick = useCallback(callbackFactory("TextBox29", "Service", "/Service", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex7Cb() {
	const onClick = useCallback(callbackFactory("Flex7", "Service", "/Service", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}