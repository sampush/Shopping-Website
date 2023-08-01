import React from "react";
import "./Side.css";
import small from "../imago/small3.png";
import small2 from "../../Component/lommy2.png";
import small3 from "../../Component/lommy3.png";

function Side() {
  return (
    <div className="top-pay2">
      <div className="small-bop">
        <img src={small} alt="" />

        <div className="small-top">
          <div className="small-top2">
            <div>
              <h6 className="smart">BIKIN DEAL</h6>
              <p className="dump">Size: Small</p>
              <p className="dump">Color: Till</p>
            </div>

            <div>
              <h6 className="h6-d">Remove</h6>
            </div>
          </div>

          <div className="small-border">
            <div className="small-i">
              <p>Qty</p>
            </div>
            <div>
              <h6>$68.1</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="small-bop">
        <img src={small3} alt="" />

        <div className="small-top">
          <div className="small-top2">
            <div>
              <h6 className="smart">BIKIN DEAL</h6>
              <p className="dump">Size: Small</p>
              <p className="dump">Color: Till</p>
            </div>

            <div>
              <h6 className="h6-d">Remove</h6>
            </div>
          </div>

          <div className="small-border">
            <div className="small-i">
              <p>Qty</p>
            </div>
            <div>
              <h6>$68.1</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="small-bop">
        <img src={small2} alt="" />

        <div className="small-top">
          <div className="small-top2">
            <div>
              <h6 className="smart">BIKIN DEAL</h6>
              <p className="dump">Size: Small</p>
              <p className="dump">Color: Till</p>
            </div>

            <div>
              <h6 className="h6-d">Remove</h6>
            </div>
          </div>

          <div className="small-border">
            <div className="small-i">
              <p>Qty</p>
            </div>
            <div>
              <h6>$68.1</h6>
            </div>
          </div>
        </div>
      </div>

        {/* {2} */}
      <div className="dis-bord">
        <div>
          <h5>DISCOUNT CODE</h5>
        </div>

        <div className="input-flex">
          <div className="input-d">
              <input text="discount" />
          </div>

          <div className="input-box">
            <h6>Apply</h6>
          </div>
        </div>
      </div>
        
        {/* {3} */}

      <div className="sum-bord">
        <div className="sum-pad">
          <h2>ORDER SUMMARY</h2>
        </div>

        <div>
          <div className="total-flex">
            
              <p>Subtotal</p>
            
            <div>
              <p>$204.03 USD</p>
            </div>
          </div>

          <div className="total-flex">
            
              <p>Flat rate</p>
            
            <div>
              <p>$18.93 USD</p>
            </div>
          </div>

          <div className="total-flex">
              <div className="move-total">
                <p>Total</p>
              </div>
              
            
            <div>
              <p>$229.23 USD</p>
            </div>
          </div>
        </div>

        <div className="input-box">
            <h6>Pay and Place order- $ 229.23 USD</h6>
          </div>
        
      </div> 
    </div>
  );
}

export default Side;
