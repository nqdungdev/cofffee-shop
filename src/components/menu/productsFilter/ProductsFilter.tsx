"use client";
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { FaTimes, FaWindowClose } from "react-icons/fa";
import {
  FaArrowDownShortWide,
  FaArrowUpWideShort,
  FaEye,
  FaHotjar,
} from "react-icons/fa6";
import MenuCollapse from "../common/MenuCollapse";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setFilters, setSortBy } from "@/lib/features/products/productsSlice";
import Button from "@/components/common/button/Button";

type Props = {
  useFilter: [boolean, Dispatch<SetStateAction<boolean>>];
  useSort: [boolean, Dispatch<SetStateAction<boolean>>];
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const ProductsFilter = ({ useFilter, useSort }: Props) => {
  const router = useRouter();
  const [isFilter, setIsFilter] = useFilter;
  const [isSort, setIsSort] = useSort;
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch } = useForm();
  const { data: categories } = useSWR<any>(
    "https://diatycafe.vercel.app/api/category",
    fetcher
  );

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortBy(event.target.value));
  };

  const selectedCategories: string[] = watch("categories", []);

  useEffect(() => {
    selectedCategories && dispatch(setFilters(selectedCategories));

    return () => {};
  }, [selectedCategories, dispatch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 mb-3 bg-[#eff8f3] grid grid-col-2 gap-x-10"
    >
      <input
        className="p-3 text-center text-black border border-solid border-black w-full bg-white outline-none col-span-2"
        placeholder="Tìm kiếm"
        onChange={(e) => {
          router.push(`?search=${e.target.value.trim()}`);
        }}
      />

      <div
        className={`bg-[#eff8f3] p-5 md:p-0 flex flex-col top-0 md:!left-0 z-[100] md:z-0 w-[300px] h-screen fixed md:relative md:w-full md:h-max transition-all duration-300 lg:col-span-2 ${
          isFilter ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-solid border-[#ddd] pb-5 md:hidden">
          <h3 className="font-bold text-black uppercase">BỘ LỌC</h3>
          <div className="cursor-pointer text-lg">
            <Button
              className="!w-10 !h-10 !p-2 bg-black border-black border text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
              type="button"
              onClick={() => setIsFilter(false)}
            >
              <FaTimes />
            </Button>
          </div>
        </div>

        <MenuCollapse title="Danh mục thực đơn">
          <ul className="overflow-y-auto flex gap-1 flex-col mb-1">
            {categories?.data?.map(
              (el: any) =>
                el &&
                !el.parent_id && (
                  <li className="w-full" key={el._id}>
                    <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                      <input
                        type="checkbox"
                        value={el._id}
                        {...register("categories")}
                        // onChange={handleFilterChange}
                      />
                      {el.name_vie}
                    </label>
                    <ul className="pl-5">
                      {categories?.data?.map(
                        (elChild: any) =>
                          elChild.parent_id &&
                          elChild.parent_id === el._id && (
                            <li key={elChild._id} className="w-full">
                              <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                                <input
                                  type="checkbox"
                                  value={elChild._id}
                                  {...register("categories")}
                                  // onChange={handleFilterChange}
                                />
                                {elChild.name_vie}
                              </label>
                            </li>
                          )
                      )}
                    </ul>
                  </li>
                )
            )}
          </ul>
        </MenuCollapse>
      </div>

      <div
        className={`bg-[#eff8f3] p-5 md:p-0 flex flex-col top-0 md:!left-0 z-[100] md:z-0 w-[300px] h-screen fixed md:relative md:w-full md:h-max transition-all duration-300 lg:col-span-2 ${
          isSort ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-solid border-[#ddd] pb-5 md:hidden">
          <h3 className="font-bold text-black uppercase">SẮP XẾP</h3>
          <div className="cursor-pointer text-lg">
            <Button
              className="!w-10 !h-10 !p-2 bg-black border-black border text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
              type="button"
              onClick={() => setIsSort(false)}
            >
              <FaTimes />
            </Button>
          </div>
        </div>

        <MenuCollapse title="Sắp xếp theo">
          <ul className="p-0 overflow-y-auto flex gap-1 flex-col mb-1">
            {[
              { label: "Mới nhất", icon: <FaEye />, value: "new" },
              {
                label: "Bán chạy",
                icon: <FaHotjar />,
                value: "best-seller",
              },
              ,
              {
                label: "Giá cao đến thấp",
                icon: <FaArrowUpWideShort />,
                value: "desc",
              },
              {
                label: "Giá thấp đến cao",
                icon: <FaArrowDownShortWide />,
                value: "asc",
              },
            ].map(
              (el, index) =>
                el && (
                  <li key={index} className="w-full">
                    <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                      <input
                        type="radio"
                        value={el.value}
                        {...register("sort")}
                        onChange={(e) => handleSortChange(e)}
                      />
                      {el.icon}
                      <span>{el.label}</span>
                    </label>
                  </li>
                )
            )}
          </ul>
        </MenuCollapse>
      </div>

      {(isFilter || isSort) && (
        <div
          className={`md:hidden fixed left-0 top-0 w-full h-full bg-black transition-all duration-300 z-50 ${
            isFilter || isSort ? "opacity-50" : "opacity-0"
          }`}
        ></div>
      )}
    </form>
  );
};

export default ProductsFilter;
