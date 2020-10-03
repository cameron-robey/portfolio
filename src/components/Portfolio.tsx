import React, { useState, useEffect } from 'react';

import { portfolio } from './../data';

// Styles
import * as s from './styles/PortfolioStyles';

interface PortfolioItem {
  title: string,
  image_url: string,
  languages: string[],
  information: string,
  links: { url: string, text: string }[]
}

interface InfoBoxProps {
  data: PortfolioItem
}

const InfoBox: React.FC<InfoBoxProps> = ({data, ...rest}) => {
  return <>
    <s.InfoBox>
      <s.Title>{data.title}</s.Title>
      <s.Pills>{
        data.languages.map((item: string, index) => <>
          <s.Pill>{item}</s.Pill>
        </>)
      }</s.Pills>
      {/* <s.Languages><b>Languages and frameworks: </b>{data.languages}</s.Languages> */}
      <s.Information>{data.information}</s.Information>
      { data.links.map((link, index) => <>
        <s.Link href={link.url}>{link.text}</s.Link>
      </>) }
    </s.InfoBox >
  </>
}

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [infoShow, setInfoShow] = useState<undefined|number>(undefined);

  useEffect(() => {
    // TODO: replace with API call when using CMS

    setProjects(portfolio);
  }, []);

  return <>
    <s.Portfolio>
      <s.GridWrapper>
        {
          projects.map((project, index) => <>
            <s.Item>
              <s.Thumbnail
                src={project.image_url}
                onClick={() => (infoShow === index) ? setInfoShow(undefined) : setInfoShow(index)}
              />
            </s.Item>
            { (index === infoShow) ? <>
              <InfoBox data={project} />
            </> : null}
          </>
          )
        }
      </s.GridWrapper>
    </s.Portfolio>
  </>
}

export default Portfolio;