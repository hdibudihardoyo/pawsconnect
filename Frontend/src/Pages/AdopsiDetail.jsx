import { useParams } from "react-router-dom";
import NavHeader from "../Components/NavHeader";
import { puppiesItems, shareItems, catDetailItems } from "../constants";
import DetailKucing from "../Components/DetailKucing";
import Footer from "../Components/Footer";
import MapComponent from "../Components/MapComponent";

const AdopsiDetail = () => {
  const {id} = useParams();
  const cat = puppiesItems.find((item) => item.id === parseInt(id));

  if (!cat) {
    return <div>Cat not found</div>;
  }

  const details = catDetailItems[id];

  return (
    <>
      <NavHeader
        nav="Detail Kucing"
        page="Beranda"
        pagenav1=">"
        page2="Adopsi"
        pagenav2=">"
        page3="Detail Kucing"
      />

      <div className="container mx-auto px-4 grid grid-cols-4 space-x-2 space-y-5 mt-5 mb-40">
        <div className="col-span-3">
          <div
            className="w-[840px] h-[523px] bg-center bg-contain shadow-xl"
            style={{
              backgroundImage: `url(${cat.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "70%",
              backgroundPosition: "top",
              backgroundOrigin: "content-box",
            }}
          ></div>
        </div>
        <DetailKucing details={details} />
        <div className="col-span-3 flex flex-wrap justify-start space-x-4 mt-4 ">
          {cat.img.map((imgItem, index) => (
            <img
              key={index}
              className=" w-[195px] h-[180px] object-cover object-top mb-2"
              src={imgItem.image}
              alt={`${cat.title} ${index + 1}`}
            />
          ))}
        </div>
        <div className="col-span-1 mt-4">
          <h1 className="text-secondary text-xl font-semibold font-Satoshi-Reguler">
            Share This
          </h1>
          <div className="flex space-x-4 mt-4">
            {shareItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-lg"
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-3 mt-4 w-[830px] h-[523px]">
          <div className="bg-greyLight p-4">
            <h1 className="text-xl font-semibold font-Satoshi-Reguler">
              Deskripsi
            </h1>
            <p className="text-base font-light font-Satoshi-Light">
              {cat.description}
            </p>
          </div>
          <div className="col-span-3 mt-4 w-[830px] h-[523px]">
          <div className="bg-greyLight p-4">
            <h1 className="text-xl font-semibold font-Satoshi-Reguler">
              Proses Adopsi
            </h1>
            <p className="text-base font-light font-Satoshi-Light">
              1. Hubungi kontak yang tertera di halaman ini.
            </p>
            <p className="text-base font-light font-Satoshi-Light">
              2. Isi formulir adopsi yang akan diberikan.
            </p>
            <p className="text-base font-light font-Satoshi-Light">
              3. Tunggu konfirmasi dari pihak kontak yang dihubungi.
            </p>
            <p className="text-base font-light font-Satoshi-Light">
              4. Jika disetujui, Anda dapat menjemput kucing di lokasi yang telah ditentukan.
            </p>
          </div>
        </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-secondary text-xl font-semibold font-Satoshi-Regulerbold">
            Map Lokasi
          </h1>
          {/* Placeholder for map or additional details */}
          <div className="px-4 bg-greyLighter"></div>
          <MapComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdopsiDetail;
