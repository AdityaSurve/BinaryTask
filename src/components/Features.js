import React from "react";
import BudgetMulitpleProjects from "../assets/features/BudgetMulitpleProjects.png";
import InvoiceScanAutoImport from "../assets/features/InvoiceScan&Auto-Import.png";
import InventoryTracker from "../assets/features/InventoryTracker.png";
import ApprovalSystemwithLevels from "../assets/features/ApprovalSystemWithLevels.png";
import AssignProjectMembers from "../assets/features/AssignProjectMembers.png";
import Dashboard from "../assets/features/Dashboard.png";
import DuplicateDetector from "../assets/features/DuplicatesDetector.png";
import IntegrationWith3rdPartyTools from "../assets/features/IntegrationsWith3rdPartyTools.png";
import Phone from "../assets/features/FeaturePhone.png";

const Features = () => {
  const leftData = [
    {
      id: 1,
      title: "Budget Multiple Projects",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imageUrl: BudgetMulitpleProjects,
    },
    {
      id: 2,
      title: "Invoice Scan & Auto-Import",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imageUrl: InvoiceScanAutoImport,
    },
    {
      id: 3,
      title: "Inventory Tracker",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imageUrl: InventoryTracker,
    },
    {
      id: 4,
      title: "Approval System with Levels",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imageUrl: ApprovalSystemwithLevels,
    },
  ];
  const rightData = [
    {
      id: 1,
      title: "Assign Project Members",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imageUrl: AssignProjectMembers,
    },
    {
      id: 2,
      title: "Dashboard",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imageUrl: Dashboard,
    },
    {
      id: 3,
      title: "Duplicate Detector",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imageUrl: DuplicateDetector,
    },
    {
      id: 4,
      title: "Integration with 3rd Party Tools",
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imageUrl: IntegrationWith3rdPartyTools,
    },
  ];
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-5 pt-14">
      <div className="text-4xl font-satoshi font-bold">Tons of Features</div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3">
          {leftData.map((item) => (
            <div className="flex flex-row h-[100px] gap-3">
              <div className="flex gap-2 items-center flex-col font-pop w-[250px]">
                <div className="text-[#1A2237] font-bold w-[100%] text-right">
                  {item.title}
                </div>
                <div className="text-[#5e596c] w-[100%] text-right">
                  {item.description}
                </div>
              </div>
              <div className="h-[75px] w-[75px] flex justify-center items-center">
                <img src={item.imageUrl} alt="" className="h-[50px] w-[50px]" />
              </div>
            </div>
          ))}
        </div>
        <div>
          <img src={Phone} alt="" className="h-[400px]" />
        </div>
        <div className="flex flex-col gap-3">
          {rightData.map((item) => (
            <div className="flex flex-row h-[100px] gap-3">
              <div className="h-[75px] w-[75px] flex justify-center items-center">
                <img src={item.imageUrl} alt="" className="h-[50px] w-[50px]" />
              </div>
              <div className="flex gap-2 items-center flex-col font-pop w-[250px]">
                <div className="text-[#1A2237] font-bold w-[100%] text-left">
                  {item.title}
                </div>
                <div className="text-[#5e596c] w-[100%] text-left">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
