import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import ReCAPTCHA from "react-google-recaptcha";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Howl, Howler } from "howler";
import axios from "axios";
import { useWeb3 } from "@3rdweb/hooks";
import { v4 as uuid } from "uuid";
import absoluteUrl from "next-absolute-url";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 270,
  height: 390,
  bgcolor: "#F7F7F7",
  p: 4,
  overflow: "scroll",
  borderRadius: "0.6rem",
};

const SVGComponent = ({ origin }) => {
  const router = useRouter();

  const { address } = useWeb3();

  React.useEffect(async () => {
    if (typeof window !== "undefined") {
      window.addEventListener("message", (event) => {
        // IMPORTANT: check the origin of the data!
        if (event.origin.startsWith(`${origin}`)) {
          // The data was sent from your site.
          // Data sent with postMessage is stored in event.data:
          console.log(event.data);
          if (event.data === "openModal") {
            setOpen(true);
          }
        } else {
          // The data was NOT sent from your site!
          // Be careful! Do not use it. This else branch is
          // here just for clarity, you usually shouldn't need it.
          return;
        }
      });
    }
    const options = {
      method: "GET",
      url: `https://api.opensea.io/api/v1/asset/0x101446d295c7aff9ca9573c611fede0c3841d707/${router.query.name}`,
    };

    await axios
      .request(options)
      .then(function (response) {
        getImg(response.data);
        setSrc(response.data.image_url);
        setNFTdata(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [NFTdata, setNFTdata] = useState();

  const [open, setOpen] = React.useState(false);
  const [scary, setScary] = React.useState("0");
  const [img, setImg] = React.useState();

  const getImg = (data) => {
    0 <= data.token_id && data.token_id <= 2041
      ? setImg(1)
      : 2042 <= data.token_id && data.token_id <= 4077
      ? setImg(2)
      : 4078 <= data.token_id && data.token_id <= 6113
      ? setImg(3)
      : 6114 <= data.token_id && data.token_id <= 8152
      ? setImg(4)
      : 8153 <= data.token_id && data.token_id <= 10193
      ? setImg(5)
      : 10194 <= data.token_id && data.token_id <= 12234
      ? setImg(6)
      : 12235 <= data.token_id && data.token_id <= 14275
      ? setImg(7)
      : 14276 <= data.token_id && data.token_id <= 16316
      ? setImg(8)
      : 16317 <= data.token_id && data.token_id <= 18357
      ? setImg(9)
      : 18358 <= data.token_id && data.token_id <= 20396
      ? setImg(10)
      : 20397 <= data.token_id && data.token_id <= 20401
      ? setImg(11)
      : setImg();
  };

  const handleOpen = () => {
    const timeout = setTimeout(() => {
      sound.play();
    }, 1000);

    return () => clearTimeout(timeout);
  };

  const handleOpen2 = () => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timeout);
  };

  const handleClose = () => {
    setOpen(false);
    setScary("0");
  };
  const [token, setToken] = React.useState("");
  const reCaptcha = React.useRef();

  const [name, setName] = React.useState("");
  const uniqid = uuid();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const [src, setSrc] = React.useState();

  const [error, setError] = React.useState({
    severity: "",
    message: "",
    open2: false,
  });

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError({ severity: "", message: "", open2: false });
  };

  const handleClick = () => {
    window.top.location.href = `/share/${uniqid}`;
  };

  const onSubmit = () => {
    if (!name) {
      setError({
        severity: "error",
        message: "You must enter a Name",
        open2: true,
      });
      return;
    }

    if (!token) {
      setError({
        severity: "error",
        message: "You must verify the Captcha",
        open2: true,
      });
      return;
    }

    Axios.post(`${origin}/api/newMember`, {
      token,
      name,
      auth: "2api2f3e42fea-7b35-47ad-bad4-114a143231762api2",
      data: NFTdata,
      token2: NFTdata.token_id,
      uniqid,
      owner: address,
    })
      .then((resp) => {
        const timeout = setTimeout(() => {
          handleClick();
        }, 1000);

        return () => clearTimeout(timeout);
      })
      .catch(({ response }) => {
        window.top.location.href = `/share/${response.data.user.uniqid}`;
      })
      .finally(() => {
        reCaptcha.current.reset();
        setToken("");
      });
  };

  var sound = new Howl({
    src: ["/Scream.mp3"],
    autoplay: false,
    loop: false,
    onend: function () {
      setScary("0");
      if (window && window.parent) {
        window.parent.postMessage(
          {
            message: "Pause",
          },
          "*"
        );
      }
      handleOpen2();
    },
    onplay: function () {
      setScary("100%");
      setSrc(`/${img}.png`);
      if (window && window.parent) {
        window.parent.postMessage(
          {
            message: img,
          },
          "*"
        );
      }
    },
  });

  return (
    <>
      <div onClick={handleOpen}>
        {src ? <Image src={src} height={1895} width={1286} alt="img" /> : null}
      </div>
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
            April Fools!🤪
          </Typography>
          <Typography align="left" id="modal-modal-description" sx={{ mt: 1 }}>
            The word &#39;Tape&#39; in our Hot Tape Girls Club not only refers
            to the tapes that cover our girls&#39; bodies but also means ‘Turn
            off’ in the Samoan language. So, we welcome you to the Hot Turnoff
            Girls Club, a club that always turns you off!🥵🥶
            <br></br>
            <br></br>You now have to change your social media icon to our
            certified token and prank 3 friends after inputting your name to
            recieve the token and sharable link!😈😈😈 The top 100 tape girls
            owners with the highest number of shares could win NFT airdrop and
            up to 5 ETH cash prizes!🤑🤑
            <br></br>
            <br></br>Thank you for participating in our experimental NFT
            project, your support is a crucial element in our future
            development.🙇‍♂️ We will use the money raised to create more
            impactive, innovative NFT and blockchain projects. Please continue
            to support us and follow our Twitter and Discord!😤
            <br></br>
            <br></br>Let&#39;s prank every dude and enjoy April Fool&#39;s
            Day!🤩🤩🤩
          </Typography>
          <br />
          <Typography align="center">
            <TextField
              required
              id="outlined-required"
              label="Name"
              onChange={(e) => handleChange(e)}
              value={name}
              inputProps={{
                maxLength: 8,
              }}
            />
          </Typography>
          <br />
          <div>
            <ReCAPTCHA
              ref={reCaptcha}
              sitekey="6LdX9TcfAAAAAEtfuS7CAdTbma-0r8Hnd1itDX-w"
              onChange={(token) => setToken(token)}
              onExpired={(e) => setToken("")}
              size="compact"
            />
          </div>
          <br />
          <Typography
            align="center"
            style={{ color: "light-grey", fontSize: "0.6rem" }}
            id="modal-modal-description"
            // variant="p"
          >
            By forming a badge you agree to follow our{" "}
            <a
              href="https://www.hottapegirlsclub.com/terms-of-service"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Terms of Service
            </a>
          </Typography>
          <br />
          <Typography align="center">
            <Button variant="contained" onClick={onSubmit}>
              Confirm
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={error.open2}
          autoHideDuration={6000}
          onClose={handleClose2}
        >
          <Alert
            onClose={handleClose2}
            severity={error.severity}
            sx={{ width: "100%" }}
          >
            {error.message}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};
export default SVGComponent;

export async function getServerSideProps(ctx) {
  const { origin } = absoluteUrl(ctx.req);

  return {
    props: { origin },
  };
}
