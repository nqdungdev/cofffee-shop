import Button from "@/components/common/button/Button";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="bg-theme py-[60px]">
      <div className="container">
        <div className="overflow-hidden grid grid-cols-2 gap-5">
          <div className="oveflow-hidden">
            <p className="mb-2 text-[#e0d8cc] text-base">CONTACT</p>
            <p className="relative text-white text-[35px] leading-[35px]">
              Đăng ký nhượng quyền thương hiệu
            </p>
          </div>
          <div className="oveflow-hidden">
            <form method="post">
              <div className="overflow-hidden mt-5 flex rounded-md">
                <div className="w-[calc(100%_-_150px)]">
                  <input
                    name="email"
                    type="text"
                    placeholder="Địa chỉ email"
                    className="border border-solid border-green border-r-0 h-[50px] w-full px-5 outline-none text-theme text-base bg-white font-normal transition-all duration-500 shadow-none"
                    required
                  />
                </div>

                <div className="w-[150px]">
                  <Button className="bg-green text-white border-green h-[50px] rounded-none hover:bg-white hover:text-green">
                    Đăng ký
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
