import styles from "./Accreditations.module.css";
import Link from "next/link";
import PageHeader from "../PageHeader";
import Badge from "@/components/UI/Badge/Badge";

const accreditationsData = [
  {
    title: "BIS",
    description: "Bureau of Indian Standards accredited for Testing of Packaged Drinking water and Linear Alkyl Benzene Sulphonic Acid (LABSA)",
    image: "/accreditations/bis-logo.png",
  },
  {
    title: "NABL",
    description: "National Accreditation Board for Testing and Calibration Laboratories (NABL) accreditation for Laboratory services as per ISO17025",
    image: "/accreditations/nabl-logo-tc12310.png",
  },
  {
    title: "FSSAI",
    description: "Notified laboratory providing testing services for food products, including microbiological, chemical, and physical analysis.",
    image: "/accreditations/fssai.png",
  },
  {
    title: "ISO 9001-QMS-TRA",
    description: "ISO 9001:2008 qualified and Certified",
    image: "/accreditations/iso-9001-2015.png",
  },
  {
    title: "MoEF",
    description: "Ministry Of Environment & Forest (MoEF) Recognition for our Laboratory Services.",
    image: "/accreditations/moef.jpg",
  },
  {
    title: "ISO 14001 -EMS-TRA",
    description: "ISO 14001 qualified and Certified",
    image: "/accreditations/iso-14001.png",
  },
  {
    title: "ISO 45001-OHSMS-TRA",
    description: "ISO 45001 qualified and Certified",
    image: "/accreditations/iso-45001.png",
  },
  {
    title: "NABET",
    description: "NABET Certificate.",
    image: "/accreditations/nabet-logo.png",
  },
];

export default function Accreditations() {
  return (
    <>
      {/* Reusing existing About PageHeader */}
      <PageHeader />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.badgeWrap}>
            <Badge variant="news">Quality you can trust</Badge>
          </div>
          
          <h2 className={styles.heading}>Accreditations</h2>

          <div className={styles.grid}>
            {accreditationsData.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={item.image} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.cardFooter}>
                  <button className={styles.downloadBtn}>
                    <i className="fa-regular fa-file-pdf"></i>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
