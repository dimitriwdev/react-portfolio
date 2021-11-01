import React from "react";
import ProgressBar from "./ProgressBar";

import { useTranslation } from "react-i18next";
import Grid from '@material-ui/core/Grid';

const Skills = () => {
  const { t } = useTranslation();

  const languages = [
    { id: 1, value: "Javascript", xp: 2 },
    { id: 2, value: "TypeScript", xp: 0.5 },
    { id: 3, value: "css", xp: 2 },
    { id: 4, value: "html", xp: 2 }
  ];

  const frameworks = [
    { id: 5, value: "React", xp: 1 },
    { id: 6, value: "Redux", xp: 1 },
    { id: 7, value: "Material UI", xp: 1 },
    { id: 8, value: "Axios", xp: 1 }
  ];

  return (
    <Grid container>
      <Grid container item xs={12} sm={6} >
        <ProgressBar
          skillLists={languages}
          title={t('Languages')}
        />
      </Grid>
      <Grid container item xs={12} sm={6} >
        <ProgressBar
          skillLists={frameworks}
          title={t('FrameworksAndLibraries')}
        />
      </Grid>
    </Grid>
  );
};

export default Skills;