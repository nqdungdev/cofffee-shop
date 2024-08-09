import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Button from "@/components/common/button/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useForm } from "react-hook-form";
import { setSearches } from "@/lib/features/products/productsSlice";

type Props = {
  useSearch: [boolean, Dispatch<SetStateAction<boolean>>];
};

const SearchBox = ({ useSearch }: Props) => {
  const [isSearch, setIsSearch] = useSearch;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      keyword: "",
    },
  });
  const dispatch = useAppDispatch();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearches(e.target.value));
  };

  const { searchedProducts } = useAppSelector((state) => state.productsReducer);

  const onSubmit = (data: any) => {
    dispatch(setSearches(data.keyword));
  };
  return (
    <>
      <div
        className={`h-screen w-full max-w-[300px] md:max-w-[400px] top-0 fixed z-50 overflow-y-auto text-center text-white bg-white transition-all duration-500 ${
          isSearch ? "right-0" : "-right-full"
        }`}
      >
        <form
          className="mb-8 px-4 py-5 bg-theme overflow-hidden flex"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            role="search"
            className="w-[calc(100%_-_80px)] relative h-10 bg-white"
          >
            <input
              className="bg-transparent w-full text-black text-base p-3 outline-none h-10"
              type="text"
              autoComplete="off"
              placeholder="Tìm kiếm..."
              {...register("keyword")}
              onChange={handleSearch}
            />
          </div>

          <Button
            className="!w-10 !h-10 !p-2 !rounded-none bg-black border-white border text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300 border-r-0"
            type="submit"
          >
            <FaSearch />
          </Button>
          <Button
            className="!w-10 !h-10 !p-2 !rounded-none  bg-black border-white border text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
            type="button"
            onClick={() => setIsSearch(false)}
          >
            <FaTimes />
          </Button>
        </form>

        <div className="my-0 mx-[5%]">
          {searchedProducts?.map(
            (product: any, index) =>
              product && (
                <div key={index} className="mb-3 overflow-hidden flex gap-3">
                  <Link href={`/menu/${product._id}`}>
                    <div className="relative w-[80px] h-[80px] rounded-md overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        title={product.name}
                        loading="lazy"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="10vw"
                      />
                    </div>
                  </Link>

                  <div className="text-sm text-black leading-[1.4] tracking-widest mt-0 text-left flex flex-col justify-between">
                    <h3>
                      <Link href={`/menu/${product._id}`} title={product.name}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-[#ff5c5f] leading-6">
                      <span>{(product.new_price / 1000).toFixed(3)}</span>đ
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      {isSearch && (
        <div
          className={`fixed left-0 top-0 w-full h-full bg-black transition-all duration-300 z-40 ${
            isSearch ? "opacity-50" : "opacity-0"
          }`}
        ></div>
      )}
    </>
  );
};

export default SearchBox;
