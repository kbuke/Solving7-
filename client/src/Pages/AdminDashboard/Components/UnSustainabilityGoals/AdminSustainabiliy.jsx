import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { unGoalIcon } from "../../../../Component/unGoalIcon"

export function AdminSustainability({
    unGoals,
    setSelectedInstance, 
    setAction
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
                    instance={uG}
                    instanceImg={unImg}
                    instanceName={unGoal}
                    instanceText={[
                        {
                            title: "Info",
                            text: unInfo
                        }
                    ]}
                    setSelectedInstance={setSelectedInstance}
                    setAction={setAction}
                />
            )
        })
    )
}
