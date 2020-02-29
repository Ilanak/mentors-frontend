import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TRANSLATE from './translation/hebrew';
import { fetchTechnologies } from './apis/technologies';

export default function AddressForm() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetchAllTechnologies();
  },[]);

  async function fetchAllTechnologies(){
    const allTechnologies = await fetchTechnologies();
    setTechnologies(allTechnologies);
  }

  function buildTextField({ id, name, label, isRequired }){
    return (<TextField
        required={ isRequired }
        id={ id }
        name={ name }
        label={ label }
        fullWidth/>);
  }

  function renderTechnologies(){
    return (<Grid item xs={12}>
      <Typography component="h3">
        { TRANSLATE.FORM.RELEVANT_TAGS }
      </Typography>
      <Grid container xs={12}>
        { technologies.map(item => <Grid item xs={12} sm={6}><FormControlLabel
            control={<Checkbox name="technolgies" value='false' />}
            label={ item }/>
        </Grid>)}
      </Grid>
    </Grid>);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        פרטים אישיים והיסטוריה מקצועית
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          { buildTextField({ id: 'firstName', name: 'firstName', label: TRANSLATE.FORM.FIRST_NAME, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
          { buildTextField({ id: 'lastName', name: 'lastName', label: TRANSLATE.FORM.LAST_NAME, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
          { buildTextField({ id: 'email', name: 'email', label: TRANSLATE.FORM.EMAIL, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
        { buildTextField({ id: 'phoneNumber', name: 'phoneNumber', label: TRANSLATE.FORM.PHONE_NUMBER, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
        { buildTextField({ id: 'workplace', name: 'workplace', label: TRANSLATE.FORM.WORKPLACE, isRequired: true }) }
        </Grid>
        <Grid item xs={12} sm={6}>
        { buildTextField({ id: 'jobTitle', name: 'jobTitle', label: TRANSLATE.FORM.JOB_TITLE, isRequired: true }) }
        </Grid>
        <Grid item xs={12}>
        { buildTextField({ id: 'bio', name: 'bio', label: TRANSLATE.FORM.BIO, isRequired: true }) }
        </Grid>
        <Grid item xs={12}>
        { buildTextField({ id: 'academicBio', name: 'academicBio', label: TRANSLATE.FORM.ACADEMIC_BIO, isRequired: true }) }
        </Grid>
        <Grid item xs={12}>
        { buildTextField({ id: 'jobSearch', name: 'jobSearch', label: TRANSLATE.FORM.JOB_SEARCH, isRequired: true }) }
        </Grid>
        { renderTechnologies() }
      </Grid>
    </React.Fragment>
  );
}