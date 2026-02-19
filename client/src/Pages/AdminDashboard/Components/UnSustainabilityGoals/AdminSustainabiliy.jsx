import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { unGoalIcon } from "../../../../Component/unGoalIcon"

export function AdminSustainability({
    unGoals
}){
    return(
        unGoals?.map((uG, index) => {
            const unGoal = uG?.goal 
            const unId = uG?.id 
            const unInfo = uG?.info
            const unImg = unGoalIcon(unId)

            return(
                <AdminPopUpContents 
                    key={index}
                    instanceImg={unImg}
                    instanceName={unGoal}
                    instanceText={[
                        {
                            title: "Info",
                            text: unInfo
                        }
                    ]}
                />
            )
        })
    )
}
