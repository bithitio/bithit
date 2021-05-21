import { FaBars,FaTimes } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display:block;text-align:left;width:100%;padding-top:4px;
`;

export const Bars = styled(FaBars)`
  display:none;

  &.active {display:none;}

  @media screen and (max-width: 889px) {
    display:block;z-index:999999;
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const CloseIcon = styled(FaTimes)`
  display:none;
  
  
  @media screen and (max-width: 889px) {
    display:none;z-index:999999;
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 1.8rem;
    cursor: pointer;
    
    &.active {display:block;}
  }
`;

export const NavMenu = styled.div`
    display:inline-block;width:78%;text-align:left;padding-left:0px;
    font-family:"Poppins",Tahoma,Arial;font-weight:400;font-size:17px;

    @media screen and (max-width: 889px) {
        opacity:0;
        &.active {
            transition:0.3s ease-in-out;opacity:100%;
            display:block;position:fixed;left:0;top:0px;z-index:-1;
            background:#f8f8f8;width:100%;padding:80px 0 250px 0;
        }
    }
`;

export const NavLink = styled(Link)`
    display:inline-block;width:18%;cursor:pointer;color:#444 !important;text-align:center;
    
    &:hover {
        color: #15cdfc !important;
    }
    &.active {
        color: #15cdfc !important;
    }
    

    @media screen and (max-width: 889px) {
        display:block;width:100%;padding:20px 0;
    }
`;

export const NavBtn = styled.nav`
    display:inline-block;width:22%;text-align:right;

    @media screen and (max-width: 889px) {
        position:absolute;right:10px;top:5px;width:80%;
    }
`;

export const NavBtnLink = styled(Link)`
    display:block;color:#fff !important;height:38px;line-height:38px;text-align:center;
    font-family:"Poppins",Tahoma,Arial;font-weight:300;font-size:17px;padding:0 25px;
    border-radius:16px;-khtml-border-radius:16px;-moz-border-radius:16px;
    background: rgba(18,111,205,1);
    background: -moz-linear-gradient(-45deg, rgba(18,111,205,1) 0%, rgba(30,211,221,1) 60%, rgba(30,211,221,1) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(18,111,205,1)), color-stop(60%, rgba(30,211,221,1)), color-stop(100%, rgba(30,211,221,1)));
    background: -webkit-linear-gradient(-45deg, rgba(18,111,205,1) 0%, rgba(30,211,221,1) 60%, rgba(30,211,221,1) 100%);
    background: -o-linear-gradient(-45deg, rgba(18,111,205,1) 0%, rgba(30,211,221,1) 60%, rgba(30,211,221,1) 100%);
    background: -ms-linear-gradient(-45deg, rgba(18,111,205,1) 0%, rgba(30,211,221,1) 60%, rgba(30,211,221,1) 100%);
    background: linear-gradient(135deg, rgba(18,111,205,1) 0%, rgba(30,211,221,1) 60%, rgba(30,211,221,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#126fcd', endColorstr='#1ed3dd', GradientType=1 );

    &:hover {
        transition: all 0.2s ease-in-out;
        color:#fff;
    }

    @media screen and (max-width: 889px) {
        display:inline-block;font-size:12px;height:28px;line-height:28px;padding:0 12px;
        width:auto;
    }
`;