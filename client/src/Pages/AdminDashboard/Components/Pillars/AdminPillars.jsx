import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { PillarImg } from "../../../../Component/PillarImg"

export function AdminPillars({
    allPillars
}){
    return(
        allPillars?.map((pillar, index) => {
            const pillarName = pillar?.name 
            const pillarId = pillar?.id 
            const pillarImg = PillarImg(pillarId)
            const pillarChallenge = pillar?.challenge
            const pillarOffering = pillar?.offering
            const pillarSuccess = pillar?.success

            return(
                <AdminPopUpContents 
                    key={index}
                    instanceImg={pillarImg}
                    instanceName={pillarName}
                    instanceText={[
                        {
                            title: "Challenge",
                            text: pillarChallenge
                        },

                        {
                            title: "Offering",
                            text: pillarOffering
                        },

                        {
                            title: "Success",
                            text: pillarSuccess
                        }
                    ]}
                />
            )
        })
    )
}