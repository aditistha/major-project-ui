import { Link, NavLink } from "react-router-dom";
import { SidebarContainer } from "./AdminSidebar.styled";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaCalendarMinus, FaUserAlt, FaHome, FaUsers, FaClipboard, FaClipboardList, FaCubes, FaHandshake, FaChevronCircleRight, FaRegCreditCard, FaMoneyCheck } from "react-icons/fa";
const SidebarData = [
  {
    icon: FaHome,
    heading: "Dashboard",
    path: "/admin/Dashboard",
  },

  {
    icon: FaUsers,
    heading: "Employee",
    path: "/admin/User",
  },
  {
    icon: FaCalendarMinus,
    heading: "Menu",
    path: "/MenuDB",
  },
  {
    icon: FaClipboard,
    heading: "Category",
    path: "/ProductDB",
  },
  {
    icon: FaClipboardList,
    heading: "Orders",
    path: "/OrdersDB",
  },
  {
    icon: FaCubes,
    heading: "Inventory",
    path: "/InventoryDB",
  },
  {
    icon: FaHandshake,
    heading: "Suppliers",
    path: "/SuppliersDB",
  },
  {
    icon: FaClipboard,
    heading: "Feedback",
    path: "/FeedbackDB",
  },
  {
    icon: FaRegCreditCard,
    heading: "Payment",
    path: "/PaymentDB",
  },
  {
    icon: FaMoneyCheck,
    heading: "Suppliers Payment",
    path: "/Suppliers_paymentDB",
  },
  {
    icon: FaUserAlt,
    heading: "Admin Profile",
    path: "/Admin_profileDB",
  },
];


const AdminSidebar = () => {

  const [expanded, setExpaned] = useState(true)
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <SidebarContainer>
        <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
          <FaBars />
        </div>
        <motion.div className='sidebar'
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ''}
        >


          {/* menu */}
          <div className="menu">
            <div className="logo">
              <span>FOODIE</span>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <div className="menuItem">

                  <NavLink to={item.path} key={index}
                    className={navClass => navClass.isActive ? 'menuItem active'
                      : 'menuItem'}

                  // onClick={() => {
                  //   if (item.heading === 'Employee') {
                  //     toggleDropdown();
                  //   }
                  // }}
                  >
                    <div className='icon'> <item.icon /></div>
                    <span>{item.heading}</span>
                  </NavLink>

                  {/* {item.heading === 'Employee' && showDropdown && (
                  <div className="dropdownMenu">
                    {item.dropdownOptions.map((option, optionIndex) => (
                      <NavLink
                        to={option.path}
                        className="dropdownMenuItem"
                        key={optionIndex}
                      >
                        {option.text}
                      </NavLink>
                    ))}
                  </div>
                )} */}
                </div>
              );
            })}


            <div className="menuItem">
              <FaChevronCircleRight />
            </div>
          </div>

        </motion.div>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;
