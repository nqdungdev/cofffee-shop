import Button from "@/components/common/button/Button";
import Image from "next/image";
import React from "react";

type Props = {};

const Introduce = (props: Props) => {
  return (
    <section className="py-[40px] -mt-[250px]">
      <div className="container-fluid">
        <div className="relative w-full h-[500px]">
          <Image
            src="/uploads/source/background/coffee-background-1.jpg"
            alt="Về chúng tôi"
            title="Về chúng tôi"
            loading="lazy"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </div>

        <div className="container">
          <div className="grid grid-cols-3 gap-5 -mt-[200px] overflow-hidden">
            <div className="order-2 col-span-3 md:col-span-2">
              <div className="mt-8 mx-0 my-5">
                <p className="relative mb-4 text-green text-base bg:transparent lg:bg-white inline-block lg:px-4 rounded-md">
                  Gờ coffee
                </p>
                <p className="relative text-theme md:text-white text-[30px] md:text-[80px] leading-[1.5] font-bold">
                  Về Chúng Tôi
                </p>
              </div>

              <div className="mb-10">
                <p className="text-[17px] leading-[25px] mb-5 mt-3 text-justify">
                  2013, tôi và vài người bạn mở một công ty cafe giữa đỉnh điểm
                  của thực phẩm bẩn và hóa chất. Chúng tôi chọn cafe sạch nguyên
                  chất, đi ngược lại với tất cả, với mong muốn thay đổi thứ thức
                  uống quen thuộc hằng ngày của hàng triệu người. Công ty tồn
                  tại chớp nhoáng sau đó nhanh chóng sụp đổ. Mọi người đi hết để
                  lại tôi với thất bại vốn được dự báo từ trước.
                </p>
                <p className="text-[17px] leading-[25px] mb-5 mt-3 text-justify">
                  2015, tôi quay lại mở quán Gờ đầu tiên tại đường Cao Đạt. Đây
                  là giai đoạn mạng xã hội phát triển vượt kiểm soát, việc hòa
                  nhập với thế giới rất nhanh chóng và chính xác. Các quán cafe
                  cùng mọc dần lên, không gian lộng lẫy, nước uống trendy thức
                  thời - capuccino thay cho cafe sữa, arabica thay cho robusta
                  mạnh mẽ rất Việt. Chúng ta đều đã trải qua một thời gian loay
                  hoay xa lạ để thích nghi với những điều được du nhập về như
                  thế.
                </p>
                <p className="text-[17px] leading-[25px] mb-5 mt-3 text-justify">
                  Gờ cũng ngắm nhìn những điều mới mẻ ấy, nhưng sau tất cả chưa
                  một lần thay đổi giá trị cốt lõi của mình: Cafe phải sạch và
                  không nên là một thứ xa xỉ. Cafe phải là thức uống mọi người
                  đều có thể uống, uống hằng ngày, là chất xúc tác cho những câu
                  chuyện vội vã buổi sáng với đồng nghiệp, vài phút cập nhật
                  tình hình thế giới và là một thứ gần gũi quen thuộc.
                </p>
                <p className="text-[17px] leading-[25px] mb-5 mt-3 text-justify">
                  Cho đến giờ, Gờ vẫn là quán bán cafe cho khách hàng là người
                  Việt, ngon đúng gu người Việt. Nước nhiệt đới, cafe chỉ nên là
                  cafe, phải được uống đá, phải được rang mộc, xay và phục vụ
                  trong thời gian rất ngắn để giữ trọn hương vị. Đó mới xứng
                  đáng là ly cafe mỗi buổi sáng mà bất cứ ai có thể mua, uống và
                  thưởng thức trọn ngày dài của mình.
                </p>
                <p className="text-[17px] leading-[25px] mb-5 mt-3 text-justify">
                  Đó là Gờ và sẽ luôn là Gờ.
                </p>
              </div>

              <Button className="bg-theme text-white border-theme hover:bg-white hover:text-theme">
                XEM THÊM
              </Button>
            </div>

            <div className="relative order-1 col-span-3 md:col-span-1 min-h-[400px] h-full">
              <Image
                src="/uploads/source/about/people3.jpg"
                alt="Về Chúng Tôi"
                title="Về Chúng Tôi"
                loading="lazy"
                fill
                style={{ objectFit: "cover" }}
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
