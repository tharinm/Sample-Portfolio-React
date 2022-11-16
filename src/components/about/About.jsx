import React from 'react';
import "./about.css";
import Award from "../../img/award.png"

export const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>

        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
              Cupidatat velit nulla proident labore occaecat fugiat reprehenderit consequat nisi.
            </p>
            <p className='a-desc'>
              Incididunt veniam cupidatat aute non nostrud incididunt eu labore id non fugiat minim exercitation. Ut nostrud quis velit dolore proident. Ullamco reprehenderit officia amet esse aute excepteur tempor dolore. Nulla mollit nulla dolore velit Lorem qui fugiat. Duis id deserunt quis laboris eiusmod aliqua occaecat cupidatat non fugiat excepteur. Quis voluptate ullamco dolore deserunt aute aliqua aliquip amet voluptate nulla. Fugiat ad tempor mollit labore occaecat.
            </p>

            <div className='a-award'>
              <img src={Award} alt="" className='a-award-img'/>
              <div className='a-award-text'>
                <h4 className='a-award-title'>International Design</h4>
                <p className='a-award-desc'>
                  Mollit excepteur veniam sunt tempor sunt.
                </p>
              </div>
            </div>

        </div>
    </div>
  )
}
