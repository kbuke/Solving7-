import { text } from "@fortawesome/fontawesome-svg-core";
import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents";

export function AdminPartners({
    allPartners,
    setSelectedInstance,
    setAction
}){
    console.log(allPartners)
    return(
        allPartners?.map((partner, index) => {
            console.log(partner)
            const partnerName = partner?.name
            const partnerLogo = `/PartnerLogos/${partnerName}Logo.png`

            return(
                <AdminPopUpContents 
                    key={index}
                    instance={partner}
                    instanceImg={partnerLogo}
                    instanceName={partnerName}
                    setSelectedInstance={setSelectedInstance}
                    setAction={setAction}
                />
            )
        })
    )
}