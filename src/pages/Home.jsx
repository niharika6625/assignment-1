import ContractImage from "../images/contract2.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";
import { StyledHome } from "./StyledHome";

const Home = () => {
  return (
    <StyledHome>
      <div className="content-wrap">
        <div className="content-body">
          <h1>The Contract Automation Platform</h1>
          <div className="content-btn">
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                startIcon={<GroupIcon />}
                href="/customer"
                sx={{ height: "60px", padding: 3 }}
              >
                Customers
              </Button>
              <Button
                variant="contained"
                startIcon={<ArticleIcon />}
                href="/contract"
                sx={{ height: "60px", padding: 3 }}
              >
                Contracts
              </Button>
            </Stack>
          </div>
        </div>
        <div className="content-image">
          <img height="500px" src={ContractImage} alt="logo" />
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
