const axios = require("axios");
const api_domain = "https://soccer.sportmonks.com/api/v2.0";


async function getTeamNameByID(team_id){
  try{
    const team = await axios.get(
      `${api_domain}/teams/${team_id}`,
      {
        params: {
          api_token: process.env.api_token
        },
      }
    );
    return team.data.data.name;
  }
  catch{
    return "team not found in API";
  }  
}

async function getInfoOfTeam(team_id){
  const response = await axios.get(`${api_domain}/teams/${team_id}`, {
    params: {
      api_token: process.env.api_token
    },
  });
  console.log(response.data);
  const team_name = response.data.data.name;
  const team_logo = response.data.data.logo_path;
  return {team_name,team_logo}
}

//should add additional information maybe, not only name
async function getTeamsInfo(team_ids_array){
  let promises = [];
  team_ids_array.map((id) =>
    promises.push(
      axios.get(`${api_domain}/teams/${id}`, {
        params: {
          api_token: process.env.api_token
        },
      })
    )
  );
  let teams_info = await Promise.all(promises);
  return extractRelevantTeamData(teams_info);
}

function extractRelevantTeamData(teams_info) {
  return teams_info.map((team_info) => {
    const team_id= team_info.data.data.id;
    const team_name = team_info.data.data.name;
    const team_logo = team_info.data.data.logo_path;
    return {
      id: team_id,
      name: team_name,
      logo: team_logo
    };
  });
}

async function getCoachByTeam(team_id){
  try{
    const team = await axios.get(
      `${api_domain}/teams/${team_id}`,
      {
        params: {
          api_token: process.env.api_token,
          include: "coach"
        },
      }
    );
    return team.data.data.coach;
  }
  catch{
    return "team not found in API";
  }  
}
exports.getCoachByTeam = getCoachByTeam;
exports.getTeamNameByID = getTeamNameByID;
exports.getTeamsInfo =getTeamsInfo;
exports.extractRelevantTeamData = extractRelevantTeamData;
exports.getInfoOfTeam = getInfoOfTeam;