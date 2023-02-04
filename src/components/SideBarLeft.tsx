import React from "react";
import { useState, useEffect } from 'react';
import SlidingPane from "react-sliding-pane";
import { ProSidebarProvider, Sidebar, Menu } from 'react-pro-sidebar';
import CategoryDataService from "../services/category-service";
import ProductDataService from "../services/product-service";
import { parseCategory } from "../utils/category-util";

import "react-sliding-pane/dist/react-sliding-pane.css";


function SideBarLeft() {
    const [ isPaneOpenLeft, setIsPaneOpenLeft ] = useState(true);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      CategoryDataService.getAll()
      .then((response: any) => {
        setCategories(response.data)
       
      })
      .catch((e: Error) => {
      });
    }, []);

    useEffect(() => {
      ProductDataService.getAll()
      .then((response: any) => {
        setProducts(response.data)
       
      })
      .catch((e: Error) => {
      });
    }, []);


 return <>
    
  <div style={{ marginTop: "0px" }}>
    <button onClick={() => setIsPaneOpenLeft(!isPaneOpenLeft)}>
      Click me to open left pane with 20% width!
    </button>
  </div>
  <SlidingPane
        // closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={isPaneOpenLeft}
        // title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="300px"
        onRequestClose={() => setIsPaneOpenLeft(false)}
      >
        <ProSidebarProvider>
        <Sidebar>
          <Menu>
            {parseCategory(categories, 0)}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
      </SlidingPane>
    
  </>
}

export default SideBarLeft;