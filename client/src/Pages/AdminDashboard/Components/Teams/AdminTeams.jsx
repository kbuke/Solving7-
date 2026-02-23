import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { TeamsImg } from "../../../../Component/TeamsImg"

export function AdminTeams({
    allTeams,
    setSelectedInstance, 
    setAction
}){

    return(
        allTeams.map((team, index) => {
            const teamName = team?.name
            const teamImg = TeamsImg(teamName)
            const teamInfo = team?.info
            return(
                <AdminPopUpContents 
                    key={index}
                    instance={team}
                    instanceImg={teamImg}
                    instanceName={teamName}
                    instanceText={[
                        {
                            title: "Info",
                            text: teamInfo
                        }
                    ]}
                    setSelectedInstance={setSelectedInstance}
                    setAction={setAction}
                />
            )
        })
    )
}