import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { borderRadius } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import absoluteUrl from "next-absolute-url";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#010101",
    color: theme.palette.common.white,
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.5rem",
    fontWeight: "700",
    fontStyle: "italic",
    "&:hover": {
      color: "#B22048",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 18,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#131313",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    background: "#B22048",
  },
}));

const width_proportion = '80%';
const height_proportion = '60%';

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: width_proportion,
  height: height_proportion,
  bgcolor: "#f7f7f7",
  p: 4,
  overflow: "scroll",
  borderRadius: "0.6rem",
};

export default function CustomizedTables({ res2 }) {

  const rows = res2.user;
  console.log(res2.user.data ? res2.user.data.token_id : null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "700" }}>
      <Header />
      <span
        style={{
          padding: "1rem",
          fontSize: "1.5rem",
          fontWeight: "700",
          fontStyle: "italic",
          backgroundColor: "#B22048",
          margin: "3rem 3rem 2rem 5%",
          transform: "skew(-10deg)",
          width: "28%",
          float: "left",
        }}
      >
        Score Board
      </span>
      <span
        onClick={handleOpen}
        style={{
          padding: "1rem",
          fontSize: "1.5rem",
          fontWeight: "700",
          fontStyle: "italic",
          backgroundColor: "#B22048",
          margin: "3rem 3rem 2rem 5%",
          transform: "skew(-10deg)",
          float: "right",
          cursor: "pointer",
        }}
      >
        Rules
      </span>
      <TableContainer
        style={{ backgroundColor: "#0E0E0E", paddingBottom: "2rem" }}
      >
        <Table
          style={{
            margin: "auto",
            border: "2px #B22048 solid",
          }}
          sx={{ width: "90%" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank</StyledTableCell>
              {/* <StyledTableCell>Badge</StyledTableCell> */}
              <StyledTableCell>Tape Girl ID</StyledTableCell>
              <StyledTableCell align="right">Score</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    fontStyle: "italic",
                  }}
                >
                  {index + 1}
                </StyledTableCell>
                {/* <StyledTableCell component="th" scope="row">
                <Image src={row.badge} alt="Badge" height={50} width={50} />
              </StyledTableCell> */}
                <StyledTableCell>
                  {row.data ? row.data.token_id : null}
                </StyledTableCell>
                <StyledTableCell align="right">{row.count}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              alignItems: "right",
              float: "right",
              marginTop: "-1.8rem",
              marginRight: "-1.8rem",
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Typography>
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
             Rules
          </Typography>
          <Typography
            align="left"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
           1. A score will be given to the tape girls when a certified token is generated.
           <br></br><br></br>2. From 1st April, 12 AM (GMT-4), to 7th April, 11:59 PM (GMT-4), top 100 tape girls owners with the highest scores win customised NFT certified tokens.
           <br></br><br></br>3. Highest scores owner could also win 5 ETH, while 2nd-3rd could win 3 ETH, 7th-10th could win 1 ETH. Price rewards would be initiated once the sales have reached 50%.
           <br></br><br></br>4. When there is a transfer of tape girl ownership, all the scores belong to the new owner.
           <br></br><br></br>5. Please do not send to anyone who are easily disturbed.
           <br></br><br></br>6. Follow our {" "}
            <a
              href="https://www.hottapegirlsclub.com/terms-of-service"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Terms of Service
            </a>
           <br></br><br></br>7. Have fun!
          </Typography>
          {/* <Typography align="center">
            <Button variant="contained">
              Confirm
            </Button>
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { res, req } = ctx;
  const { origin } = absoluteUrl(req);
  
  const res1 = await fetch(`${origin}/api/getMembers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auth: 'apif3e42fea-7b35-47ad-bad4-114a14323176api',
    }),
  });
  const res2 = await res1.json();
  return {
    props: { res2 },
  };
}
